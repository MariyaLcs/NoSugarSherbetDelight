import { createServer, Model } from "miragejs";

createServer({
  models: {
    sherbet: Model,
  },

  seeds(server) {
    server.create("sherbet", {
      id: "1",
      name: "Tropical Mango",
      price: 5,
      description:
        "Tropical Mango sherbet is your escape to a sun-kissed beach. Made with real mangoes and no added sugar, it's a healthy treat you can enjoy guilt-free.",
      image: "tropical-mango.png",
      type: "fruit",
    });
    server.create("sherbet", {
      id: "2",
      name: "Berry Blast",
      price: 5,
      description:
        "Berry Blast combines strawberries, raspberries, and blueberries in a refreshing sherbet. It's like a summer berry patch in every spoonful—without the sugar!",
      image: "berry-blast.png",
      type: "fruit",
    });
    server.create("sherbet", {
      id: "3",
      name: "Lemon Zest",
      price: 5,
      description:
        "Lemon Zest brings the perfect balance of tart and sweet. Made with real lemons and no added sugar, it's a zesty treat that refreshes and delights.",
      image: "lemon-zest.png",
      type: "citrus",
    });
    server.create("sherbet", {
      id: "4",
      name: "Watermelon Wonder",
      price: 5,
      description:
        "Watermelon Wonder is a hydrating treat that tastes like summer. With no added sugar, it's a sweet way to cool down on a hot day.",
      image: "watermelon-wonder.png",
      type: "fruit",
    });
    server.create("sherbet", {
      id: "5",
      name: "Peach Perfection",
      price: 5,
      description:
        "Peach Perfection is smooth, creamy, and bursting with the flavor of fresh peaches. It's a sugar-free delight that tastes like sunshine.",
      image: "peach-perfection.png",
      type: "fruit",
    });
    server.create("sherbet", {
      id: "6",
      name: "Green Apple Twist",
      price: 5,
      description:
        "Green Apple Twist offers a crisp, tart taste that's incredibly refreshing. Made without added sugar, it's a guilt-free way to enjoy the taste of green apples.",
      image: "green-apple-twist.png",
      type: "fruit",
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/sherbet", (schema, request) => {
      return schema.sherbets.all();
    });

    this.get("/sherbet/:id", (schema, request) => {
      let id = request.params.id;
      return schema.sherbets.find(id);
    });
  },
});
