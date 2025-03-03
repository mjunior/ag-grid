// Source: https://simplemaps.com/data/world-cities
function getData() {
    return [
        { city: 'Tokyo, Japan', lat: 35.685, lon: 139.7514, population: 35676000 },
        { city: 'New York, United States', lat: 40.6943, lon: -73.9249, population: 19354922 },
        { city: 'Mexico City, Mexico', lat: 19.4424, lon: -99.131, population: 19028000 },
        { city: 'Mumbai, India', lat: 19.017, lon: 72.857, population: 18978000 },
        { city: 'Sao Paulo, Brazil', lat: -23.5587, lon: -46.625, population: 18845000 },
        { city: 'Delhi, India', lat: 28.67, lon: 77.23, population: 15926000 },
        { city: 'Shanghai, China', lat: 31.2165, lon: 121.4365, population: 14987000 },
        { city: 'Kolkata, India', lat: 22.495, lon: 88.3247, population: 14787000 },
        { city: 'Los Angeles, United States', lat: 34.1139, lon: -118.4068, population: 12815475 },
        { city: 'Dhaka, Bangladesh', lat: 23.7231, lon: 90.4086, population: 12797394 },
        { city: 'Buenos Aires, Argentina', lat: -34.6025, lon: -58.3975, population: 12795000 },
        { city: 'Karachi, Pakistan', lat: 24.87, lon: 66.99, population: 12130000 },
        { city: 'Cairo, Egypt', lat: 30.05, lon: 31.25, population: 11893000 },
        { city: 'Rio de Janeiro, Brazil', lat: -22.925, lon: -43.225, population: 11748000 },
        { city: 'Osaka, Japan', lat: 34.75, lon: 135.4601, population: 11294000 },
        { city: 'Beijing, China', lat: 39.9289, lon: 116.3883, population: 11106000 },
        { city: 'Manila, Philippines', lat: 14.6042, lon: 120.9822, population: 11100000 },
        { city: 'Moscow, Russia', lat: 55.7522, lon: 37.6155, population: 10452000 },
        { city: 'Istanbul, Turkey', lat: 41.105, lon: 29.01, population: 10061000 },
        { city: 'Paris, France', lat: 48.8667, lon: 2.3333, population: 9904000 },
        { city: 'Seoul, South Korea', lat: 37.5663, lon: 126.9997, population: 9796000 },
        { city: 'Lagos, Nigeria', lat: 6.4433, lon: 3.3915, population: 9466000 },
        { city: 'Jakarta, Indonesia', lat: -6.1744, lon: 106.8294, population: 9125000 },
        { city: 'Guangzhou, China', lat: 23.145, lon: 113.325, population: 8829000 },
        { city: 'Chicago, United States', lat: 41.8373, lon: -87.6862, population: 8675982 },
        { city: 'London, United Kingdom', lat: 51.5, lon: -0.1167, population: 8567000 },
        { city: 'Lima, Peru', lat: -12.048, lon: -77.0501, population: 8012000 },
        { city: 'Tehran, Iran', lat: 35.6719, lon: 51.4243, population: 7873000 },
        { city: 'Kinshasa, Congo (Kinshasa)', lat: -4.3297, lon: 15.315, population: 7843000 },
        { city: 'Bogota, Colombia', lat: 4.5964, lon: -74.0833, population: 7772000 },
        { city: 'Shenzhen, China', lat: 22.5524, lon: 114.1221, population: 7581000 },
        { city: 'Wuhan, China', lat: 30.58, lon: 114.27, population: 7243000 },
        { city: 'Hong Kong, Hong Kong', lat: 22.305, lon: 114.185, population: 7206000 },
        { city: 'Tianjin, China', lat: 39.13, lon: 117.2, population: 7180000 },
        { city: 'Chennai, India', lat: 13.09, lon: 80.28, population: 7163000 },
        { city: 'Taipei, Taiwan', lat: 25.0358, lon: 121.5683, population: 6900273 },
        { city: 'Bengaluru, India', lat: 12.97, lon: 77.56, population: 6787000 },
        { city: 'Bangkok, Thailand', lat: 13.75, lon: 100.5166, population: 6704000 },
        { city: 'Lahore, Pakistan', lat: 31.56, lon: 74.35, population: 6577000 },
        { city: 'Chongqing, China', lat: 29.565, lon: 106.595, population: 6461000 },
        { city: 'Miami, United States', lat: 25.7839, lon: -80.2102, population: 6381966 },
        { city: 'Hyderabad, India', lat: 17.4, lon: 78.48, population: 6376000 },
        { city: 'Dallas, United States', lat: 32.7936, lon: -96.7662, population: 5733259 },
        { city: 'Santiago, Chile', lat: -33.45, lon: -70.667, population: 5720000 },
        { city: 'Philadelphia, United States', lat: 40.0077, lon: -75.1339, population: 5637884 },
        { city: 'Belo Horizonte, Brazil', lat: -19.915, lon: -43.915, population: 5575000 },
        { city: 'Madrid, Spain', lat: 40.4, lon: -3.6834, population: 5567000 },
        { city: 'Houston, United States', lat: 29.7869, lon: -95.3905, population: 5446468 },
        { city: 'Ahmadabad, India', lat: 23.0301, lon: 72.58, population: 5375000 },
        { city: 'Ho Chi Minh City, Vietnam', lat: 10.78, lon: 106.695, population: 5314000 },
        { city: 'Washington, United States', lat: 38.9047, lon: -77.0163, population: 5289420 },
        { city: 'Atlanta, United States', lat: 33.7627, lon: -84.4225, population: 5228750 },
        { city: 'Toronto, Canada', lat: 43.7, lon: -79.42, population: 5213000 },
        { city: 'Singapore, Singapore', lat: 1.293, lon: 103.8558, population: 5183700 },
        { city: 'Luanda, Angola', lat: -8.8383, lon: 13.2344, population: 5172900 },
        { city: 'Baghdad, Iraq', lat: 33.3386, lon: 44.3939, population: 5054000 },
        { city: 'Barcelona, Spain', lat: 41.3833, lon: 2.1834, population: 4920000 },
        { city: 'Haora, India', lat: 22.5804, lon: 88.3299, population: 4841638 },
        { city: 'Shenyang, China', lat: 41.805, lon: 123.45, population: 4787000 },
        { city: 'Khartoum, Sudan', lat: 15.5881, lon: 32.5342, population: 4754000 },
        { city: 'Pune, India', lat: 18.53, lon: 73.85, population: 4672000 },
        { city: 'Boston, United States', lat: 42.3188, lon: -71.0846, population: 4637537 },
        { city: 'Sydney, Australia', lat: -33.92, lon: 151.1852, population: 4630000 },
        { city: 'Saint Petersburg, Russia', lat: 59.939, lon: 30.316, population: 4553000 },
        { city: 'Chittagong, Bangladesh', lat: 22.33, lon: 91.8, population: 4529000 },
        { city: 'Dongguan, China', lat: 23.0489, lon: 113.7447, population: 4528000 },
        { city: 'Riyadh, Saudi Arabia', lat: 24.6408, lon: 46.7727, population: 4465000 },
        { city: 'Hanoi, Vietnam', lat: 21.0333, lon: 105.85, population: 4378000 },
        { city: 'Guadalajara, Mexico', lat: 20.67, lon: -103.33, population: 4198000 },
        { city: 'Melbourne, Australia', lat: -37.82, lon: 144.975, population: 4170000 },
        { city: 'Alexandria, Egypt', lat: 31.2, lon: 29.95, population: 4165000 },
        { city: 'Chengdu, China', lat: 30.67, lon: 104.07, population: 4123000 },
        { city: 'Rangoon, Burma', lat: 16.7834, lon: 96.1667, population: 4088000 },
        { city: 'Phoenix, United States', lat: 33.5722, lon: -112.0891, population: 4081849 },
        { city: 'Xi\'an, China', lat: 34.275, lon: 108.895, population: 4009000 },
        { city: 'Porto Alegre, Brazil', lat: -30.05, lon: -51.2, population: 3917000 },
        { city: 'Surat, India', lat: 21.2, lon: 72.84, population: 3842000 },
        { city: 'Hechi, China', lat: 23.0965, lon: 109.6091, population: 3830000 },
        { city: 'Abidjan, Côte D’Ivoire', lat: 5.32, lon: -4.04, population: 3802000 },
        { city: 'Brasilia, Brazil', lat: -15.7833, lon: -47.9161, population: 3716996 },
        { city: 'Ankara, Turkey', lat: 39.9272, lon: 32.8644, population: 3716000 },
        { city: 'Monterrey, Mexico', lat: 25.67, lon: -100.33, population: 3712000 },
        { city: 'Yokohama, Japan', lat: 35.32, lon: 139.58, population: 3697894 },
        { city: 'Nanjing, China', lat: 32.05, lon: 118.78, population: 3679000 },
        { city: 'Montreal, Canada', lat: 45.5, lon: -73.5833, population: 3678000 },
        { city: 'Guiyang, China', lat: 26.58, lon: 106.72, population: 3662000 },
        { city: 'Recife, Brazil', lat: -8.0756, lon: -34.9156, population: 3651000 },
        { city: 'Seattle, United States', lat: 47.6211, lon: -122.3244, population: 3643765 },
        { city: 'Harbin, China', lat: 45.75, lon: 126.65, population: 3621000 },
        { city: 'San Francisco, United States', lat: 37.7562, lon: -122.443, population: 3603761 },
        { city: 'Fortaleza, Brazil', lat: -3.75, lon: -38.58, population: 3602319 },
        { city: 'Zhangzhou, China', lat: 24.5204, lon: 117.67, population: 3531147 },
        { city: 'Detroit, United States', lat: 42.3834, lon: -83.1024, population: 3522206 },
        { city: 'Salvador, Brazil', lat: -12.97, lon: -38.48, population: 3484000 },
        { city: 'Busan, South Korea', lat: 35.0951, lon: 129.01, population: 3480000 },
        { city: 'Johannesburg, South Africa', lat: -26.17, lon: 28.03, population: 3435000 },
        { city: 'Berlin, Germany', lat: 52.5218, lon: 13.4015, population: 3406000 },
        { city: 'Algiers, Algeria', lat: 36.7631, lon: 3.0506, population: 3354000 },
        { city: 'Rome, Italy', lat: 41.896, lon: 12.4833, population: 3339000 },
        { city: 'Pyongyang, North Korea', lat: 39.0194, lon: 125.7547, population: 3300000 },
    ];
}
