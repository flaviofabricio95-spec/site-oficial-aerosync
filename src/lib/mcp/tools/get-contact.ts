import { defineTool } from "@lovable.dev/mcp-js";

const CONTACT = {
  company: "AeroSync Consultoria",
  whatsapp: "+55 11 95951-2487",
  whatsappUrl: "https://wa.me/5511959512487",
  website: "https://elite-launch-pad.lovable.app",
};

export default defineTool({
  name: "get_contact",
  title: "Get AeroSync contact info",
  description: "Return contact information for AeroSync Consultoria (WhatsApp, website).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(CONTACT, null, 2) }],
    structuredContent: CONTACT,
  }),
});
