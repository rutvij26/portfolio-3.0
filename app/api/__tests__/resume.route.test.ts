import { GET } from '../resume/route';
import { generateResumePDF } from '@/lib/resume-generator';

jest.mock('@/lib/resume-generator');

const mockGenerateResumePDF = generateResumePDF as jest.MockedFunction<typeof generateResumePDF>;

describe('GET /api/resume', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should generate and return PDF', async () => {
    const mockBuffer = Buffer.from('test pdf content');
    mockGenerateResumePDF.mockResolvedValue(mockBuffer);

    const response = await GET();
    const arrayBuffer = await response.arrayBuffer();

    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe('application/pdf');
    expect(response.headers.get('Content-Disposition')).toContain('Rutvij_Sathe_Resume.pdf');
    expect(new Uint8Array(arrayBuffer)).toEqual(new Uint8Array(mockBuffer));
  });

  it('should handle errors gracefully', async () => {
    mockGenerateResumePDF.mockRejectedValue(new Error('Generation failed'));

    const response = await GET();
    const json = await response.json();

    expect(response.status).toBe(500);
    expect(json.error).toBe('Failed to generate resume');
  });
});

