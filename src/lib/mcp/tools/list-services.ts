import { defineTool } from "@lovable.dev/mcp-js";

const SERVICES = [
  { code: "RBAC 135", name: "Certificação de Táxi Aéreo", desc: "Assessoria para obtenção e renovação do COA e Especificações de Operações, manuais operacionais e treinamento." },
  { code: "RBAC 145", name: "Oficinas de Manutenção Aeronáutica", desc: "Homologação e renovação de Organizações de Manutenção, SGQ e adequação à RBAC 145." },
  { code: "RBAC 91", name: "Operadores Privados / SAE", desc: "Gestão regulatória de aeronaves privadas, obtenção de LOA e Serviços Aéreos Especializados." },
  { code: "RBAC 141", name: "Escolas de Aviação Civil", desc: "Certificação e manutenção de Centros de Instrução de Aviação Civil (CIAC)." },
  { code: "AUDITORIA", name: "Auditorias", desc: "Auditorias internas e de conformidade regulatória ANAC." },
  { code: "SGSO", name: "SGSO/SMS", desc: "Implantação e manutenção de Sistema de Gerenciamento da Segurança Operacional." },
];

export default defineTool({
  name: "list_services",
  title: "List AeroSync services",
  description: "List all consulting services offered by AeroSync Consultoria, including RBAC certifications, audits and SMS.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(SERVICES, null, 2) }],
    structuredContent: { services: SERVICES },
  }),
});
