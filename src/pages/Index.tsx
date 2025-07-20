import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const beehives = [
    {
      name: "Улей Дадан-Блатт",
      price: "5500 ₽",
      image: "/img/5345ffd5-d2b6-4c16-bffb-f26bf3fad6a6.jpg",
      description: "Профессиональный 12-рамочный улей из кедра",
      features: ["12 рамок", "Кедр", "Вентиляция"]
    },
    {
      name: "Улей Лангстрота",
      price: "6200 ₽",
      image: "/img/5345ffd5-d2b6-4c16-bffb-f26bf3fad6a6.jpg",
      description: "Современный улей с наблюдательным окном",
      features: ["10 рамок", "Сосна", "Окно обзора"]
    },
    {
      name: "Улей Варре",
      price: "4800 ₽",
      image: "/img/5345ffd5-d2b6-4c16-bffb-f26bf3fad6a6.jpg",
      description: "Экологичный улей для естественного пчеловодства",
      features: ["8 рамок", "Липа", "Экологичный"]
    }
  ];

  const mountainHoney = [
    {
      weight: "0,2 кг",
      price: "680 ₽",
      image: "/img/a6051edf-0b91-4845-8562-6cca92745967.jpg",
      originalPrice: "750 ₽"
    },
    {
      weight: "0,5 кг",
      price: "1450 ₽",
      image: "/img/cdbab95d-2092-49cc-b30e-d75b33560890.jpg",
      originalPrice: "1600 ₽",
      popular: true
    },
    {
      weight: "0,8 кг",
      price: "2100 ₽",
      image: "/img/e9a8de44-cb19-4002-8420-c25335cce363.jpg",
      originalPrice: "2300 ₽"
    },
    {
      weight: "1 кг",
      price: "2580 ₽",
      image: "/img/a3606d2c-2ccb-4e15-a32a-48dcb8922a82.jpg",
      originalPrice: "2800 ₽",
      discount: "Выгодно!"
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
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/img/70752c60-e608-416e-a424-a2de252bd7a8.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/80"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <Icon name="Hexagon" className="text-primary/30" size={40} />
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-1000">
          <Icon name="Hexagon" className="text-primary/20" size={32} />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-pulse delay-500">
          <Icon name="Hexagon" className="text-primary/25" size={24} />
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-secondary drop-shadow-lg">
              Натуральный мёд
              <br />
              <span className="text-primary drop-shadow-md">с нашей пасеки</span>
            </h2>
            <p className="text-xl md:text-2xl text-secondary/90 mb-12 max-w-3xl mx-auto drop-shadow-sm font-medium">
              Собираем мёд в экологически чистых районах Алтайского края. 
              Доставляем свежий урожай прямо к вашему столу.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-lg px-10 py-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Icon name="Truck" size={24} className="mr-3" />
                Заказать доставку
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 bg-white/90 hover:bg-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2">
                <Icon name="Phone" size={24} className="mr-3" />
                Связаться с нами
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-20 animate-fade-in">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-secondary font-medium">лет опыта</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-secondary font-medium">натуральный мёд</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-secondary font-medium">довольных клиентов</div>
            </div>
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

      {/* Beehives Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Профессиональные ульи</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Качественные ульи из натурального дерева для успешного пчеловодства
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {beehives.map((hive, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm">
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-muted/20 to-muted/40 relative">
                  <img 
                    src={hive.image} 
                    alt={hive.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{hive.name}</CardTitle>
                  <CardDescription className="text-base">{hive.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {hive.features.map((feature, i) => (
                      <Badge key={i} variant="outline" className="text-xs font-medium">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-3xl font-bold text-primary">{hive.price}</span>
                    </div>
                    <Button size="lg" className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mountain Honey Section */}
      <section id="catalog" className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 mb-8">
              <Icon name="Mountain" className="text-primary" size={24} />
              <span className="text-primary font-semibold">Премиум качество</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Мёд горный
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Собранный на высоте 1500 метров в экологически чистых районах Алтая. 
              Уникальный состав альпийских трав придаёт особый вкус и целебные свойства.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mountainHoney.map((honey, index) => (
              <Card key={index} className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/95 backdrop-blur-sm ${honey.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
                {honey.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-primary text-white font-semibold px-3 py-1">
                      Популярный
                    </Badge>
                  </div>
                )}
                {honey.discount && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant="destructive" className="font-semibold px-3 py-1">
                      {honey.discount}
                    </Badge>
                  </div>
                )}
                
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 relative">
                  <img 
                    src={honey.image} 
                    alt={`Мёд горный ${honey.weight}`}
                    className="w-full h-full object-cover p-8 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardHeader className="text-center pb-4">
                  <div className="mb-3">
                    <div className="text-2xl font-bold text-secondary mb-1">Мёд горный</div>
                    <div className="text-xl font-semibold text-primary">{honey.weight}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-3xl font-bold text-primary">{honey.price}</span>
                      {honey.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">{honey.originalPrice}</span>
                      )}
                    </div>
                    {honey.originalPrice && (
                      <div className="text-sm text-green-600 font-medium">
                        Скидка {Math.round(((parseInt(honey.originalPrice) - parseInt(honey.price)) / parseInt(honey.originalPrice)) * 100)}%
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <Button 
                    size="lg" 
                    className="w-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base font-semibold"
                  >
                    <Icon name="Plus" size={18} className="mr-2" />
                    В корзину
                  </Button>
                  <div className="mt-4 pt-4 border-t border-muted/20">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Truck" size={16} />
                      <span>Бесплатная доставка от 3000 ₽</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
                <Icon name="Award" className="text-primary" size={24} />
                <span className="font-semibold">Сертифицировано</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
                <Icon name="Leaf" className="text-primary" size={24} />
                <span className="font-semibold">100% натуральный</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
                <Icon name="Heart" className="text-primary" size={24} />
                <span className="font-semibold">Полезно для здоровья</span>
              </div>
            </div>
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