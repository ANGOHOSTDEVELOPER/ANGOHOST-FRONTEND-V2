/* eslint-disable @typescript-eslint/no-explicit-any */
type IDNS = {
    ns1: string;
    ns2: string;
    ns3?: string;
    ns4?: string;
  };
  
  export type IOptions = {
    panel_type: string;
    panel_link: string;
    disk_limit: string;
    bandwidth_limit: string;
    email_limit: string;
    database_limit: string;
    addons_limit: string;
    subdomain_limit: string;
    ftp_limit: string;
    park_limit: string;
    max_email_per_hour: string;
    cpu_limit: string;
    server_features?: any;
    dns: IDNS;
    renewal_selection_hide: boolean;
    auto_install: number;
    hide_domain: boolean;
    order_limit_per_user: boolean;
    popular: boolean;
    server_group_id: string;
    server_id: string;
  };
  
  export type IModuleData = {
    account_limit?: string;
    disk_limit?: string;
    bandwidth_limit?: string;
    acllist?: string;
    plan?: string;
  };
  
export type IAddon = {
    name: string;
    features: string;
    price: string;
    discount: string;
    period: 'year'|'month',
    time: number
  };
  
export type IPlan = {
    id: number;
    type: string;
    type_id: number;
    category: number;
    categories: any | null;
    status: string;
    visibility: string;
    ctime: string;
    rank: number;
    stock: string;
    override_usrcurrency: number;
    taxexempt: number;
    upgrade: number;
    options: IOptions;
    affiliate_disable: number;
    affiliate_rate: string;
    upgradeable_products: string;
    addons: string;
    requirements: string;
    module: string;
    module_data: IModuleData;
    notes: string;
    subdomains: any | null;
  };
