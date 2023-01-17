import helloworld from '../utils/helloworld';

it ("Should return 'Hello Rachana'", ()=>{
    
   const result = helloworld();
    
    expect(result).toBe("Hello Rachana")
})

