import { TestBed, async } from '@angular/core/testing';
import { articleComponent } from './article.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        articleComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(articleComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'star-angular'`, () => {
    const fixture = TestBed.createComponent(articleComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('star-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(articleComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('star-angular app is running!');
  });
});
