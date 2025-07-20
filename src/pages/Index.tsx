import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const honeyTypes = [
    {
      name: "Цветочный мёд",
      price: "850 ₽",
      image: "/img/55dfd70e-032a-4b8c-b0c7-fd40d7653596.jpg",
      description: "Светлый ароматный мёд с разнотравья",
      weight: "500г"
    },
    {
      name: "Липовый мёд",
      price: "950 ₽",
      image: "/img/55dfd70e-032a-4b8c-b0c7-fd40d7653596.jpg",
      description: "Целебный мёд с насыщенным вкусом",
      weight: "500г"
    },
    {
      name: "Гречишный мёд",
      price: "1050 ₽",
      image: "/img/55dfd70e-032a-4b8c-b0c7-fd40d7653596.jpg",
      description: "Тёмный мёд с высоким содержанием железа",
      weight: "500г"
    }
  ];

  const equipment = [
    {
      name: "Улей-дадан 12-рамочный",
      price: "4500 ₽",
      image: "/img/b29e090a-b508-4e69-a5e2-504bf9651606.jpg",
      description: "Классический улей из сосны"
    },
    {
      name: "Медогонка 3-рамочная",
      price: "8900 ₽",
      image: "/img/b29e090a-b508-4e69-a5e2-504bf9651606.jpg",
      description: "Нержавеющая сталь, для начинающих"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Hexagon" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-primary">МЁД КАРГИ</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
              <a href="#equipment" className="hover:text-primary transition-colors">Оборудование</a>
              <a href="#delivery" className="hover:text-primary transition-colors">Доставка</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button variant="outline">
              <Icon name="ShoppingCart" size={20} />
              Корзина
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            Натуральный мёд
            <br />
            <span className="text-primary">с нашей пасеки</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Собираем мёд в экологически чистых районах Алтайского края. 
            Доставляем свежий урожай прямо к вашему столу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Truck" size={20} className="mr-2" />
              Заказать доставку
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% натуральный</h3>
              <p className="text-muted-foreground">Без добавок и консервантов, только природный мёд</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-muted-foreground">Почта России и СДЭК по всей стране</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Удобная оплата</h3>
              <p className="text-muted-foreground">Онлайн оплата и рассрочка без переплат</p>
            </div>
          </div>
        </div>
      </section>

      {/* Honey Catalog */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Сорта мёда</h2>
            <p className="text-xl text-muted-foreground">Выберите свой любимый вкус природы</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {honeyTypes.map((honey, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={honey.image} 
                    alt={honey.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{honey.name}</CardTitle>
                    <Badge variant="secondary">{honey.weight}</Badge>
                  </div>
                  <CardDescription>{honey.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{honey.price}</span>
                    <Button>
                      <Icon name="Plus" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Пчеловодческое оборудование</h2>
            <p className="text-xl text-muted-foreground">Всё необходимое для пасеки</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {equipment.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 aspect-square md:aspect-auto overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">{item.name}</h3>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-4">{item.price}</div>
                      <Button size="lg" className="w-full">
                        Заказать
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Доставка и оплата</h2>
            <p className="text-xl text-muted-foreground">Удобные условия для каждого покупателя</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <Icon name="Truck" className="text-primary mx-auto mb-4" size={48} />
                <CardTitle className="text-2xl">Способы доставки</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Почта России — от 350 ₽</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>СДЭК — от 290 ₽</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Бесплатно при заказе от 3000 ₽</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Доставка по всей России</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <Icon name="CreditCard" className="text-primary mx-auto mb-4" size={48} />
                <CardTitle className="text-2xl">Способы оплаты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Банковские карты онлайн</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Рассрочка 0% до 12 месяцев</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Наложенный платёж</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Безопасные платежи</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О нашей пасеке</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Семейная пасека в Алтайском крае работает уже более 15 лет. 
                Мы заботимся о пчёлах и производим качественный мёд, 
                следуя традиционным методам пчеловодства.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Award" className="text-primary" size={24} />
                  <span>Сертификат качества</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Leaf" className="text-primary" size={24} />
                  <span>Экологически чистый продукт</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Heart" className="text-primary" size={24} />
                  <span>Забота о пчёлах и природе</span>
                </div>
              </div>
            </div>
            <div className="aspect-video overflow-hidden rounded-2xl">
              <img 
                src="/img/812e1dc6-07df-450b-904b-58ac094d83a6.jpg" 
                alt="Наша пасека"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Ответим на все ваши вопросы</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <Icon name="Phone" className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </Card>
            <Card className="text-center p-8">
              <Icon name="Mail" className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">honey@kargi.ru</p>
            </Card>
            <Card className="text-center p-8">
              <Icon name="MapPin" className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-muted-foreground">Алтайский край, с. Карги</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Hexagon" className="text-primary" size={24} />
              <span className="font-bold text-xl">МЁД КАРГИ</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground">© 2024 Пасека Карги. Все права защищены.</p>
              <p className="text-sm text-muted-foreground mt-1">
                Натуральный мёд с Алтая прямо к вашему столу
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;