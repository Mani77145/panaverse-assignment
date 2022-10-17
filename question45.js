function make_car(manufacturer, model, color){
    const car_dict = {
        'manufacturer': manufacturer,
        'model': model,
    }
    if(color){
        for(i=0;i<color.length;i++){
            car_dict['Color'] = color
        }
    }
    
    return car_dict
}
my_outback = make_car('Honda', 'Civic')
console.log(my_outback)
my_outback = make_car('subaru', 'outback', color='blue')
console.log(my_outback)