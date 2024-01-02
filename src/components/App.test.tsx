import { render, screen, within } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: any) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => { },
        removeListener: () => { },
        addEventListener: () => { },
        removeEventListener: () => { },
        dispatchEvent: () => { },
    })
});

test('render sidebar with user data', async () => {
    const mockUser = { id: 1, name: 'Leanne Graham' };
    const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue(
        new Response(JSON.stringify(mockUser))
    );
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0234);

    render(<App />, { wrapper: BrowserRouter });
    const avatar = await screen.findByTestId("userAvatar");

    expect(fetchMock).toHaveBeenCalledWith(
        `${process.env.REACT_APP_API_URL}/users/${mockUser.id}`
    )
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(within(avatar).getByRole('img')).toHaveAttribute('src', 'avatar.jpg');
});