import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { AI_CONFIG } from '../../config/ai.config.js';

dotenv.config();

/**
 * Sends a prompt to the Google Gemini API using the official SDK.
 * 
 * @param {string} prompt - The raw prompt to evaluate.
 * @returns {Promise<Omit<import('../../types/ai-response.schema.js').AIResponse, 'durationMs'>>}
 */
export async function generateContent(prompt) {
  if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
    throw new Error('Empty prompt: Prompt content must be a non-empty string.');
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('Missing API key: GEMINI_API_KEY is not defined in the environment.');
  }

  const modelName = AI_CONFIG.model;

  try {
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt
    });

    if (!response || !response.text) {
      throw new Error('Empty response: Received an empty response from Gemini API.');
    }

    const responseText = response.text;

    return {
      provider: 'gemini',
      model: modelName,
      text: responseText,
      usage: {
        promptCharacters: prompt.length,
        responseCharacters: responseText.length
      }
    };
  } catch (error) {
    const msg = error.message || '';
    if (msg.includes('API_KEY_INVALID') || msg.includes('API key not valid')) {
      throw new Error('Invalid API key: GEMINI_API_KEY is incorrect.');
    }
    if (msg.includes('RESOURCE_EXHAUSTED') || error.status === 429) {
      throw new Error('API quota exceeded: The request limit has been reached. Please try again later.');
    }
    if (msg.includes('ENOTFOUND') || msg.includes('EAI_AGAIN') || msg.includes('fetch failed')) {
      throw new Error('Network failure: Unable to reach Gemini API. Please check your internet connection.');
    }
    throw new Error(`Gemini API failure: ${error.message}`);
  }
}
