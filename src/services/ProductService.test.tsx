import { ProductService } from './products';
import { api } from './api';

// Mock do axios
jest.mock('./api', () => ({
  api: {
    get: jest.fn(),
  },
}));

describe('ProductService', () => {
  it('should fetch a product by id successfully', async () => {
    const mockProduct = {
      id: 1,
      title: 'Product 1',
      price: 100,
      description: 'Description',
      category: 'Category',
      image: 'image.jpg',
    };

    (api.get as jest.Mock).mockResolvedValueOnce({ data: mockProduct });

    const product = await ProductService.getById(1);

    expect(product).toEqual(mockProduct);
  });

  it('should handle errors when fetching a product by id', async () => {
    // Mock para capturar e suprimir o erro de console
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    (api.get as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));

    try {
      await ProductService.getById(1);
    } catch (error) {
      expect(error).toEqual(new Error('Failed to fetch product'));
    }

    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
