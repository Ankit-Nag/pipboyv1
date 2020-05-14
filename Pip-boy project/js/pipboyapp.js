$(document).ready(function(){
    var weapons = [
        {
            "name": "44-pistol",
            "damage": 48,
            "fire_rate": 6,
            "range": 119,
            "accuracy": 66,
            "weight":4.2,
            "value":99
        },
        {
            "name": "10mm-pistol",
            "damage": 18,
            "fire_rate": 46,
            "range": 119,
            "accuracy": 61,
            "weight":4.2,
            "value":53
        },
        {
            "name": "assault-rifle",
            "damage": 30,
            "fire_rate": 40,
            "range": 119,
            "accuracy": 72,
            "weight": 13.1,
            "value": 144
        },
        {
            "name": "antimaterial-rifle",
            "damage": 50,
            "fire_rate": 2,
            "range": 119,
            "accuracy": 71,
            "weight": 12,
            "value": 55
        },
        {
            "name": "combat-rifle",
            "damage": 33,
            "fire_rate": 33,
            "range": 119,
            "accuracy": 70,
            "weight": 13.1,
            "value": 144
        },
        {
            "name": "gauss-rifle",
            "damage": 110,
            "fire_rate": 66,
            "range": 191,
            "accuracy": 69,
            "weight": 15.8,
            "value": 228
        },
        {
            "name": "fat-man",
            "damage": 468,
            "fire_rate": 1,
            "range": 117,
            "accuracy": 63,
            "weight": 30.7,
            "value": 512
        },
        {
            "name": "gatling-laser",
            "damage": 14,
            "fire_rate": 380.8,
            "range": 191,
            "accuracy": 63,
            "weight": 41.7,
            "value": 804
        },
        {
            "name": "tesla-rifle",
            "damage": 38,
            "fire_rate": 152,
            "range": 40,
            "accuracy": 70,
            "weight": 8.1,
            "value": 90
        },
    ];

    $('.item-list a').on('click',function(e){
        $('.item-list a').removeClass('active');
        $(e.currentTarget).addClass('active');
    });

    $('.item-list a').on('mouseover',function(e){
        var current_item = $(e.currentTarget).attr('class');
                
        for(item in weapons){
            if(weapons[item].name==current_item){
                var container = $(".item-stats");
                container.find('.damage').html(weapons[item].damage);
                container.find('.fire_rate').html(weapons[item].fire_rate);
                container.find('.range').html(weapons[item].range);
                container.find('.accuracy').html(weapons[item].accuracy);
                container.find('.weight').html(weapons[item].weight);
                container.find('.value').html(weapons[item].value);
            } 
           
        }
    });
    
    
    $('.item-list a').on('mousedown',function(e){
        var current_item = $(e.currentTarget).attr('class');
                
        for(item in weapons){
            if(weapons[item].name==current_item){
                $(".footer-damage").find('.damage').html(weapons[item].damage);
                
            } 
           
        }
    });
    
    



});