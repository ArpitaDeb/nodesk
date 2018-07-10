const games = [
    {
        name: 'Crash Bandicoot N. Sane Trilogy',
        price: 1060,
        sold: 20,
        console: 'PS4',
        showDetail: function(name) {
            console.log(`Name: ${this.name}`);
            console.log(`Price: \$${this.price}`);
            console.log(`Sold: \$${this.sold}`);
            console.log(`Console: ${this.console}`)
            console.log(`\n`);
        }
    },
    {
        name: 'Lego Marvel Super Heroes',
        price: 700,
        sold: 25,
        console: 'XBox',
        showDetail: function(name) {
            console.log(`Name: ${this.name}`);
            console.log(`Price: \$${this.price}`);
            console.log(`Sold: \$${this.sold}`);
            console.log(`Console: ${this.console}`)
            console.log(`\n`);
        }
    },
    {
        name: 'Gta V',
        price: 1449,
        sold: 30,
        console: 'PS4',
        showDetail: function(name) {
            console.log(`Name: ${this.name}`);
            console.log(`Price: \$${this.price}`);
            console.log(`Sold: \$${this.sold}`);
            console.log(`Console: ${this.console}`)
            console.log(`\n`);
        }
    },
    {
        name: 'Mortal Kombat Xl',
        price: 1190,
        sold: 34,
        console: 'PS4',
        showDetail: function(name) {
            console.log(`Name: ${this.name}`);
            console.log(`Price: \$${this.price}`);
            console.log(`Sold: \$${this.sold}`);
            console.log(`Console: ${this.console}`)
            console.log(`\n`);
        }
    },
    {
        name: 'Gta V',
        price: 1250,
        sold: 60,
        console: 'XBOX',
        showDetail: function(name) {
            console.log(`Name: ${this.name}`);
            console.log(`Price: \$${this.price}`);
            console.log(`Sold: \$${this.sold}`);
            console.log(`Console: ${this.console}`)
            console.log(`\n`);
        }
    },
    {
        name: 'Fifa 2017',
        price: 890,
        sold: 15,
        console: 'PS4',
        showDetail: function(name) {
            console.log(`Name: ${this.name}`);
            console.log(`Price: \$${this.price}`);
            console.log(`Sold: \$${this.sold}`);
            console.log(`Console: ${this.console}`)
            console.log(`\n`);
        }
    },
    {
        name: 'Uncharted 4',
        price: 950,
        sold: 30,
        console: 'PS4',
        showDetail: function(name) {
            console.log(`Name: ${this.name}`);
            console.log(`Price: \$${this.price}`);
            console.log(`Sold: \$${this.sold}`);
            console.log(`Console: ${this.console}`)
            console.log(`\n`);
        }
    },
    {
        name: 'Mortal Kombat Xl',
        price: 940,
        sold: 30,
        console: 'XBOX',
        showDetail: function(name) {
            console.log(`Name: ${this.name}`);
            console.log(`Price: \$${this.price}`);
            console.log(`Sold: \$${this.sold}`);
            console.log(`Console: ${this.console}`)
            console.log(`\n`);
        }
    },
    {
        name: 'Need For Speed',
        price: 790,
        sold: 10,
        console: 'PS4',
        showDetail: function(name) {
            console.log(`Name: ${this.name}`);
            console.log(`Price: \$${this.price}`);
            console.log(`Sold: \$${this.sold}`);
            console.log(`Console: ${this.console}`)
            console.log(`\n`);
        }
    },
    {
        name: 'Lego Batman',
        price: 1000,
        sold: 18,
        console: 'PS4',
        showDetail: function(name) {
            console.log(`Name: ${this.name}`);
            console.log(`Price: \$${this.price}`);
            console.log(`Sold: \$${this.sold}`);
            console.log(`Console: ${this.console}`)
            console.log(`\n`);
        }
    },
    {
        name: 'Fifa 17',
        price: 1290,
        sold: 12,
        console: 'PS4',
        showDetail: function(name) {
            console.log(`Name: ${this.name}`);
            console.log(`Price: \$${this.price}`);
            console.log(`Sold: \$${this.sold}`);
            console.log(`Console: ${this.console}`)
            console.log(`\n`);
        }
    },
    {    
        name: 'Resident Evil 7',
        price: 1390,
        sold: 10,
        console: 'PS4',
        showDetail: function(name) {
            console.log(`Name: ${this.name}`);
            console.log(`Price: \$${this.price}`);
            console.log(`Sold: \$${this.sold}`);
            console.log(`Console: ${this.console}`)
            console.log(`\n`);
        }
    },
    {
        name: 'Dragon Ball XX',
        price: 1390,
        sold: 25,
        console: 'XBOX',
        showDetail: function(name) {
            console.log(`Name: ${this.name}`);
            console.log(`Price: \$${this.price}`);
            console.log(`Sold: \$${this.sold}`);
            console.log(`Console: ${this.console}`)
            console.log(`\n`);
        }
    }
]

games.forEach(function(game) {
    game.showDetail();
});
