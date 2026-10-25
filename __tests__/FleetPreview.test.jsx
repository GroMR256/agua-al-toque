import { render, screen, fireEvent } from '@testing-library/react';
import FleetPreview, { planTrips } from '../components/FleetPreview';

describe('planTrips', () => {
  it('uses the fewest trips and the least idle capacity', () => {
    expect(planTrips(2)).toEqual([10]);
    expect(planTrips(12)).toEqual([15]);
    expect(planTrips(18)).toEqual([15, 10]);
    expect(planTrips(28)).toEqual([30]);
    expect(planTrips(30)).toEqual([30]);
    expect(planTrips(45)).toEqual([30, 15]);
    expect(planTrips(90)).toEqual([30, 30, 30]);
  });

  it('always carries at least the requested volume', () => {
    for (let v = 1; v <= 120; v++) {
      const total = planTrips(v).reduce((a, b) => a + b, 0);
      expect(total).toBeGreaterThanOrEqual(v);
    }
  });
});

describe('FleetPreview Component', () => {
  it('updates the trip count when a preset is chosen and quotes that volume', () => {
    const handleOpenModal = jest.fn();
    render(<FleetPreview onOpenQuoteModal={handleOpenModal} />);

    fireEvent.click(screen.getByRole('button', { name: /Obra, una semana/i }));
    expect(screen.getByText(/1 de 30 m³ \+ 1 de 15 m³/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Cotizar 45 m³/i }));
    expect(handleOpenModal).toHaveBeenCalledWith('Suministro de 45 m³ (1 de 30 m³ + 1 de 15 m³)');
  });
});
