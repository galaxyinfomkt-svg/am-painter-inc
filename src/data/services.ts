export interface Service {
  name: string;
  slug: string;
  description: string;
}

export const SERVICES: Record<string, Service> = {
  'interior-painting': {
    name: "Interior Painting",
    slug: "interior-painting",
    description: "Transform your home's interior with professional painting services"
  },
  'exterior-painting': {
    name: "Exterior Painting",
    slug: "exterior-painting",
    description: "Protect and beautify your home's exterior with expert painting"
  },
  'cabinet-refinishing': {
    name: "Cabinet Painting & Refinishing",
    slug: "cabinet-refinishing",
    description: "Refresh your kitchen and bathrooms with cabinet refinishing"
  },
  'deck-staining': {
    name: "Deck Staining",
    slug: "deck-staining",
    description: "Protect and enhance your outdoor deck"
  },
  'drywall-repair': {
    name: "Drywall Repair & Installation",
    slug: "drywall-repair",
    description: "Seamless drywall repair, water damage fixes, and new installs"
  },
  'remodeling': {
    name: "Home Remodeling",
    slug: "remodeling",
    description: "Kitchen, bath, and whole-home remodeling services"
  },
  'general-contracting': {
    name: "General Contracting",
    slug: "general-contracting",
    description: "Full-service general contracting and project coordination"
  }
};

export const getAllServiceSlugs = () => Object.keys(SERVICES);
export const getServiceBySlug = (slug: string) => SERVICES[slug];
