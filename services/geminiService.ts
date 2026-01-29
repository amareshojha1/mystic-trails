import { GoogleGenAI, Type } from "@google/genai";
import { PRODUCTS } from "../constants";

// Use process.env.API_KEY directly for initialization as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getScentRecommendation = async (userInput: string) => {
  const productContext = PRODUCTS.map(p => ({
    id: p.id,
    name: p.name,
    tags: p.tags,
    description: p.description
  }));

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `You are the AI Alchemist for "The Mystic Trails", a brand that rescues temple flowers from landfills to create 100% organic incense and lifestyle products.
    Based on the user's preference: "${userInput}", suggest 1 most relevant product from the following catalog: ${JSON.stringify(productContext)}. 
    Return a brief, poetic reason why this matches their mood or spiritual preference, emphasizing the floral origin and purity.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          reason: { type: Type.STRING },
          matchingProductId: { type: Type.STRING }
        },
        required: ["name", "reason", "matchingProductId"]
      }
    }
  });

  // response.text is a property, not a method
  return JSON.parse(response.text || '{}');
};