import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('click on func hellow world', () => {
  it('must return Hello World!', () => {
    const comp = new AppComponent();
    expect(comp.sayHello()).toBe('Hello World!');
  });
});
