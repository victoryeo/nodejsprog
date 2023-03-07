export class CreateBookDto {
  readonly name: string;
  readonly author: Record<string, any>;
  readonly title: string;
  readonly pages: number;
}