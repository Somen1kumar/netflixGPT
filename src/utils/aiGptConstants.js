import OpenAI from "openai";

export const SECRET_KEY = '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'
export const openai = new OpenAI(
    { 
        apiKey: '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',
        dangerouslyAllowBrowser: true 
    }
);
