fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
        const countryCode = data.country_code;
        let redirectUrl = 'https://default.html.org.in';

        switch (countryCode) {
            case 'IN':
                redirectUrl = 'https://in.html.org.in';
                break;
            case 'US':
                redirectUrl = 'https://us.html.org.in';
                break;
            case 'CA':
                redirectUrl = 'https://ca.html.org.in';
                break;
            case 'GB':
                redirectUrl = 'https://uk.html.org.in';
                break;
            case 'AU':
                redirectUrl = 'https://au.html.org.in';
                break;
            case 'NZ':
                redirectUrl = 'https://nz.html.org.in';
                break;
            case 'BD':
                redirectUrl = 'https://bd.html.org.in'
                break;
            default:
                redirectUrl = 'https://world.html.org.in';
        }

        window.location.href = redirectUrl;
    });
