import { defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import getContactTool from "./tools/get-contact";

export default defineMcp({
  name: "aerosync-mcp",
  title: "AeroSync Consultoria MCP",
  version: "0.1.0",
  instructions:
    "Tools for AeroSync Consultoria. Use `list_services` to enumerate aviation consulting services (RBAC 135/141/145, SGSO, audits). Use `get_contact` for WhatsApp and website contact info.",
  tools: [listServicesTool, getContactTool],
});
