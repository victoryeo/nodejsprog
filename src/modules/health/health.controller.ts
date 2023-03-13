import { Controller, Get } from '@nestjs/common';

@Controller('healthz')
export class HealthController {
  @Get()
  getHealthCheck() {

    // can instantiate an object from a class
    class Pizza {
      constructor(public name: string, public toppings: string[]) {}
    }
    // PizzaMaker is a singleton class due to static method
    class PizzaMaker {
      static create(event: Pizza) {
        return new Pizza(event.name, event.toppings);
      }
    }
    
    const pizza = PizzaMaker.create({
      name: 'Inferno',
      toppings: ['cheese', 'peppers'],
    });
    console.log(pizza);
    
    return 'healthy';
  }
}
