import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const portfolio = {
    total: 1250000,
    profit: 187500,
    profitPercent: 15,
    assets: [
      { name: 'Акции США', value: 500000, percent: 40, growth: 12 },
      { name: 'Облигации', value: 375000, percent: 30, growth: 8 },
      { name: 'Криптовалюты', value: 250000, percent: 20, growth: 25 },
      { name: 'Недвижимость', value: 125000, percent: 10, growth: 6 }
    ]
  };

  const investments = [
    { 
      id: 1, 
      name: 'Технологический фонд', 
      risk: 'Средний', 
      return: '18%', 
      minInvest: 10000,
      description: 'Инвестиции в крупнейшие технологические компании',
      icon: 'Cpu'
    },
    { 
      id: 2, 
      name: 'Стабильный доход', 
      risk: 'Низкий', 
      return: '8%', 
      minInvest: 5000,
      description: 'Консервативная стратегия с облигациями',
      icon: 'Shield'
    },
    { 
      id: 3, 
      name: 'Рост капитала', 
      risk: 'Высокий', 
      return: '28%', 
      minInvest: 25000,
      description: 'Агрессивная стратегия для опытных инвесторов',
      icon: 'TrendingUp'
    }
  ];

  const courses = [
    {
      id: 1,
      title: 'Основы инвестирования',
      duration: '2 часа',
      level: 'Начинающий',
      icon: 'BookOpen'
    },
    {
      id: 2,
      title: 'Диверсификация портфеля',
      duration: '3 часа',
      level: 'Продвинутый',
      icon: 'PieChart'
    },
    {
      id: 3,
      title: 'Управление рисками',
      duration: '2.5 часа',
      level: 'Средний',
      icon: 'AlertTriangle'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <header className="border-b bg-white/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-purple rounded-xl flex items-center justify-center">
                <Icon name="TrendingUp" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gradient-purple">InvestFlow</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <Button 
                variant={activeTab === 'home' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('home')}
                className={activeTab === 'home' ? 'gradient-purple text-white' : ''}
              >
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button 
                variant={activeTab === 'invest' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('invest')}
                className={activeTab === 'invest' ? 'gradient-purple text-white' : ''}
              >
                <Icon name="DollarSign" size={18} className="mr-2" />
                Инвестиции
              </Button>
              <Button 
                variant={activeTab === 'learn' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('learn')}
                className={activeTab === 'learn' ? 'gradient-purple text-white' : ''}
              >
                <Icon name="GraduationCap" size={18} className="mr-2" />
                Обучение
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 gradient-purple text-white hover:scale-105 transition-transform cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium opacity-90">Общий капитал</h3>
                  <Icon name="Wallet" size={24} />
                </div>
                <p className="text-4xl font-bold mb-2">
                  {portfolio.total.toLocaleString('ru-RU')} ₽
                </p>
                <p className="text-sm opacity-80">+{portfolio.profitPercent}% за год</p>
              </Card>

              <Card className="p-6 gradient-success text-white hover:scale-105 transition-transform cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium opacity-90">Прибыль</h3>
                  <Icon name="TrendingUp" size={24} />
                </div>
                <p className="text-4xl font-bold mb-2">
                  +{portfolio.profit.toLocaleString('ru-RU')} ₽
                </p>
                <p className="text-sm opacity-80">За последний год</p>
              </Card>

              <Card className="p-6 gradient-blue text-white hover:scale-105 transition-transform cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium opacity-90">Активов</h3>
                  <Icon name="BarChart3" size={24} />
                </div>
                <p className="text-4xl font-bold mb-2">{portfolio.assets.length}</p>
                <p className="text-sm opacity-80">Диверсифицировано</p>
              </Card>
            </div>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gradient-purple">Структура портфеля</h2>
              <div className="space-y-6">
                {portfolio.assets.map((asset, index) => (
                  <div key={index} className="space-y-2 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 gradient-purple rounded-lg flex items-center justify-center">
                          <Icon name="BarChart" size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{asset.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {asset.value.toLocaleString('ru-RU')} ₽
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="gradient-success text-white border-0">
                          +{asset.growth}%
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">{asset.percent}%</p>
                      </div>
                    </div>
                    <Progress value={asset.percent} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 gradient-to-br from-purple-500 to-blue-500 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 animate-float" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4">🚀 Автоматическое инвестирование</h2>
                <p className="text-lg mb-6 opacity-90">
                  Настройте автоматическое распределение средств по выбранным стратегиям
                </p>
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                  <Icon name="Settings" size={20} className="mr-2" />
                  Настроить стратегию
                </Button>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'invest' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-gradient-purple">Стратегии инвестирования</h2>
              <p className="text-muted-foreground">Выберите подходящую стратегию для автоматического инвестирования</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {investments.map((investment, index) => (
                <Card 
                  key={investment.id} 
                  className="p-6 hover:shadow-xl transition-all cursor-pointer group animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 gradient-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={investment.icon as any} size={28} className="text-white" />
                    </div>
                    <Badge 
                      variant={investment.risk === 'Низкий' ? 'secondary' : investment.risk === 'Средний' ? 'default' : 'destructive'}
                    >
                      {investment.risk}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{investment.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{investment.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Доходность</span>
                      <span className="text-lg font-bold text-gradient-purple">{investment.return}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Минимум</span>
                      <span className="font-semibold">{investment.minInvest.toLocaleString('ru-RU')} ₽</span>
                    </div>
                  </div>

                  <Button className="w-full gradient-purple text-white border-0">
                    <Icon name="Zap" size={18} className="mr-2" />
                    Активировать
                  </Button>
                </Card>
              ))}
            </div>

            <Card className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 gradient-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Lightbulb" size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Как работает автоинвестирование?</h3>
                  <p className="text-muted-foreground mb-4">
                    Настройте ежемесячный платёж и распределение по стратегиям. Система автоматически инвестирует средства, 
                    ребалансирует портфель и реинвестирует прибыль.
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Узнать подробнее
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'learn' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-gradient-purple">Обучающий центр</h2>
              <p className="text-muted-foreground">Повышайте финансовую грамотность и инвестируйте осознанно</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {courses.map((course, index) => (
                <Card 
                  key={course.id} 
                  className="p-6 hover:shadow-xl transition-all cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-14 h-14 gradient-blue rounded-xl flex items-center justify-center mb-4">
                    <Icon name={course.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="outline">{course.level}</Badge>
                    <Badge variant="secondary">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {course.duration}
                    </Badge>
                  </div>
                  <Button className="w-full" variant="outline">
                    Начать обучение
                  </Button>
                </Card>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-8 gradient-purple text-white">
                <Icon name="Award" size={40} className="mb-4" />
                <h3 className="text-2xl font-bold mb-3">Получите сертификат</h3>
                <p className="opacity-90 mb-6">
                  Пройдите все курсы и получите персональный сертификат об окончании программы обучения
                </p>
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                  Начать обучение
                </Button>
              </Card>

              <Card className="p-8">
                <Icon name="Users" size={40} className="mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-3">Сообщество инвесторов</h3>
                <p className="text-muted-foreground mb-6">
                  Общайтесь с другими инвесторами, делитесь опытом и получайте советы от экспертов
                </p>
                <Button size="lg" variant="outline">
                  Присоединиться
                </Button>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-16 border-t bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 InvestFlow. Инвестиции сопряжены с рисками
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                О нас
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Поддержка
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Документы
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
