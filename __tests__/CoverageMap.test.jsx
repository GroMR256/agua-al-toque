import { render, screen } from '@testing-library/react';
import CoverageMap from '../components/CoverageMap';

describe('CoverageMap Component', () => {
  it('renders coverage details and embedded Google Maps iframe', () => {
    render(<CoverageMap onOpenQuoteModal={() => {}} />);

    expect(screen.getByText(/Zonas de Cobertura & Mapa Operativo/i)).toBeInTheDocument();
    
    const iframe = screen.getByTitle(/Mapa de Zonas de Cobertura de Agua Al Toque/i);
    expect(iframe).toBeInTheDocument();
    expect(iframe.getAttribute('src')).toContain('google.com/maps');
  });
});
