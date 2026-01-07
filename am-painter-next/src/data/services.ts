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
    name: "Cabinet Refinishing",
    slug: "cabinet-refinishing",
    description: "Refresh your kitchen and bathrooms with cabinet refinishing"
  },
  'power-washing': {
    name: "Power Washing",
    slug: "power-washing",
    description: "Deep clean your property's exterior surfaces"
  },
  'deck-staining': {
    name: "Deck Staining",
    slug: "deck-staining",
    description: "Protect and enhance your outdoor deck"
  },
  'commercial-painting': {
    name: "Commercial Painting",
    slug: "commercial-painting",
    description: "Professional painting services for commercial properties"
  }
};

export const getAllServiceSlugs = () => Object.keys(SERVICES);
export const getServiceBySlug = (slug: string) => SERVICES[slug];
