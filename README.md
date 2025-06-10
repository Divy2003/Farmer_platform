# Farmer Connect Platform

A comprehensive web application designed to bridge the gap between farmers and buyers, providing a seamless marketplace for agricultural products with real-time market prices and farm location services.

## 🚀 Key Features

- **Dual User System**: Separate interfaces for farmers and buyers
- **Product Management**: List, update, and manage agricultural products
- **Interactive Marketplace**: Browse and search for farm products
- **Farm Location Services**: Find nearby farms using geolocation
- **Real-time Market Prices**: Get updated agricultural commodity prices
- **Rating & Review System**: Rate and review farmers and products
- **News & Updates**: Stay informed with the latest agricultural news
- **Admin Dashboard**: Comprehensive analytics and system management

## Demo

Check out our demo video: [YouTube Demo](https://youtu.be/IgJagE9QDGQ)

## 🛠️ Technical Stack

- **Backend**: Django 4.0+
- **Database**: SQLite (Development), PostgreSQL (Production-ready)
- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5
- **APIs Used**:
  - Data.gov.in API for real-time market prices
  - Google Maps API for location services

## 🚀 Getting Started

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- Git (for version control)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/farmer-connect.git
   cd farmer-connect
   ```

2. **Set up a virtual environment**:
   ```bash
   python -m venv venv
   .\venv\Scripts\activate  # On Windows
   source venv/bin/activate  # On macOS/Linux
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**:
   Create a `.env` file in the project root and add:
   ```
   DEBUG=True
   SECRET_KEY=your-secret-key-here
   DATA_GOV_API_KEY=your-data-gov-api-key
   ```

5. **Run migrations**:
   ```bash
   python manage.py migrate
   ```

6. **Create a superuser**:
   ```bash
   python manage.py createsuperuser
   ```

7. **Run the development server**:
   ```bash
   python manage.py runserver
   ```

8. **Access the application**:
   - Main site: http://127.0.0.1:8000/
   - Admin panel: http://127.0.0.1:8000/admin/

## 📁 Project Structure

```
farmprj/
├── farmprj/               # Main project configuration
│   ├── __init__.py
│   ├── settings.py         # Project settings
│   ├── urls.py            # Main URL configuration
│   └── wsgi.py
│
├── testfarmer/           # Main application
│   ├── models.py          # Database models
│   ├── views.py           # View functions
│   ├── forms.py           # Form definitions
│   ├── admin.py           # Admin configurations
│   └── prediction.py      # Price prediction module
│
├── templates/            # HTML templates
│   ├── base.html          # Base template
│   ├── farmer_dashboard.html
│   ├── market_prices.html
│   └── ...
│
├── static/               # Static files
│   ├── css/
│   ├── js/
│   └── images/
│
├── media/                # User-uploaded files
├── manage.py
└── requirements.txt

## 📝 Features in Detail

### For Farmers
- **Profile Management**: Create and manage your farm profile with location and contact details
- **Product Listings**: Add, edit, and remove your products with images and descriptions
- **Market Insights**: View real-time commodity prices and market trends
- **Direct Communication**: Connect with potential buyers through the platform
- **Ratings & Reviews**: Build your reputation with a transparent rating system

### For Buyers
- **Product Discovery**: Browse and search for farm-fresh products
- **Farm Locator**: Find nearby farms with interactive maps
- **Price Comparison**: Compare prices across different farmers and regions
- **Secure Transactions**: Safe and reliable communication with farmers
- **Request Products**: Can't find what you need? Submit a product request

### Admin Features
- **User Management**: Monitor and manage all user accounts
- **Content Moderation**: Review and approve user-generated content
- **Analytics Dashboard**: Track platform usage and user engagement
- **News Management**: Publish important updates and agricultural news

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

For any inquiries or support, please contact us at:
- Email: support@farmerconnect.com
- Website: [www.farmerconnect.com](https://www.farmerconnect.com)
- Twitter: [@FarmerConnect](https://twitter.com/FarmerConnect)

## 🙏 Acknowledgments

- Data provided by [Data.gov.in](https://data.gov.in/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Built with [Django](https://www.djangoproject.com/)
- Frontend powered by [Bootstrap 5](https://getbootstrap.com/)
