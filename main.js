const sandwiches = [
    {
        name: 'Caprese',
        img: 'https://images.unsplash.com/photo-1670842587871-326b95acbc8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        price: 11,
        quantity: 0
    },
    {
        name: 'BLT',
        img: 'https://images.unsplash.com/photo-1484344597163-9347ad5cb26d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1433&q=80',
        price: 10,
        quantity: 0
    },
    {
        name: 'Foie Gras on Focaccia',
        img: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        price: 21,
        quantity: 0
    },
    {
        name: 'Organic Guacamole Bacon Gouda',
        img: 'https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        price: 19,
        quantity: 0
    },
    {
        name: 'Grilled Cheese',
        img: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        price: 12,
        quantity: 0
    },
    {
        name: 'Ham & Cheese',
        img: 'https://images.unsplash.com/photo-1565890329542-cd8826a4c578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        price: 14,
        quantity: 0
    },
    {
        name: 'Caprese',
        img: 'https://images.unsplash.com/photo-1670842587871-326b95acbc8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        price: 11,
        quantity: 0
    },
    {
        name: 'BLT',
        img: 'https://images.unsplash.com/photo-1484344597163-9347ad5cb26d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1433&q=80',
        price: 10,
        quantity: 0
    },
    {
        name: 'Foie Gras on Focaccia',
        img: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        price: 21,
        quantity: 0
    },
    {
        name: 'Organic Guacamole Bacon Gouda',
        img: 'https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        price: 19,
        quantity: 0
    },
    {
        name: 'Grilled Cheese',
        img: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        price: 12,
        quantity: 0
    },
    {
        name: 'Ham & Cheese',
        img: 'https://images.unsplash.com/photo-1565890329542-cd8826a4c578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        price: 14,
        quantity: 0
    }
]

function drawMenu() {
    let template = '';
    sandwiches.forEach(s => {
        template +=
            `        <div class="col-6">
                        <div class="my-2 mx-4 card-image border border-white border-2 row align-items-end"
                            style="background-image: url(${s.img})">
                            <section
                                class="row align-items-end transparent rounded-bottom border-top border-white border-2 m-0 p-0">
                                <div class="col-12 d-flex justify-content-between text-light py-1 align-items-baseline">
                                    <h6>${s.name}</h6>
                                    <h6>$${s.price}</h6>
                                    <button onclick="buySandwich('${s.name}')"
                                        class="btn btn-primary rounded-circle">BUY</button>
                                </div>

                            </section>
                        </div>
                    </div>
        `
    })
    document.getElementById('menu-spot').innerHTML = template;
}

function buySandwich(name) {
    const foundSandwich = sandwiches.find(s => s.name == name);
    foundSandwich.quantity++
    console.log(foundSandwich);
    drawReceipt()
}

function drawReceipt() {
    let template = '';
    sandwiches.forEach(s => {
        if (s.quantity > 0) {
            template += `
             <section class="row">
                            <div class="col-5">
                                <p>${s.name}</p>
                            </div>
                            <div class="col-4">
                                <p>${s.quantity}</p>
                            </div>
                            <div class="col-3">$${s.price * s.quantity}</div>
                        </section>
            `
        }
    })
    document.getElementById('receipt-spot').innerHTML = template;
    drawTotal()

}

function drawTotal() {
    let total = 0;
    sandwiches.forEach(s => {
        total += s.price * s.quantity
    })

    document.getElementById('total-cost').innerText = total.toString();
}

drawMenu()
