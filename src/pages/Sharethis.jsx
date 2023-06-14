import {InlineShareButtons} from 'sharethis-reactjs';

export default function Sharethis () {
return (
    <>
    <h1>Inline Share Buttons</h1>
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
              'linkedin',
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
            image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
            description: 'uygugguyguyguygygy',       // (defaults to og:description or twitter:description)
            title: 'custom title',            // (defaults to og:title or twitter:title)
            // message: 'custom email text',     // (only for email sharing)
            // subject: 'custom email subject',  // (only for email sharing)
            // username: 'custom twitter handle' // (only for twitter sharing)
          }}
        />
        </>
)

}