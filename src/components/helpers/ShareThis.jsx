import {InlineShareButtons} from 'sharethis-reactjs';

export default function ShareThis ( {description, title, image}) {
    console.log(description);
    console.log(title);
return (
    <>
        <InlineShareButtons
          config={{
            alignment: 'center',  // alignment of buttons (left, center, right)
            color: 'white',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 16,        // font size for the buttons
            labels: 'null',        // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'whatsapp',
              'messenger',
              'facebook',
              'twitter',
              'sms',
              'reddit',
              'blogger'
            ],
            padding: 16,          // padding within buttons (INTEGER)
            radius: 20,            // the corner radius on each button (INTEGER)
            show_total: false,
            size: 40,             // the size of each button (INTEGER)

            // OPTIONAL PARAMETERS
            // url: 'https://www.sharethis.com', // (defaults to current url)
            image: image,  // (defaults to og:image or twitter:image)
            description: description,       // (defaults to og:description or twitter:description)
            title: title,            // (defaults to og:title or twitter:title)
            message: description,     // (only for email sharing)
            subject: title,  // (only for email sharing)
            // username: 'custom twitter handle' // (only for twitter sharing)
          }}
        />
        </>
)

}