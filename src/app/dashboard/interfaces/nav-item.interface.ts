export interface NavItem {
  label: string;
  icon?: string;
  route?: string;
  children?: NavItem[];
  isExpanded?: boolean; // Para controlar si el acordeón inicia abierto
}
