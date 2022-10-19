import { component$, useStyles$ } from "@builder.io/qwik";
import ArtistStyles from "~/styles/artist.css";

const ArtistBio = component$(() => {
  useStyles$(ArtistStyles);

  return (
      <div className="artist-bio">
        <div className="artist-ava">
          <img src="https://i.imgur.com/e6C8rtD.jpg" alt="" />
        </div>
        <div className="artist-details">
            <p className="artist-bio-name">NGỌT</p>
            <p className="artist-bio-active-years">2013 - nay</p>
            <p className="artist-members">Vu Dinh Trong Thang • 3 thanh vien khac</p>
            <div className="artist-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula dui, hendrerit sed fermentum molestie, posuere nec risus. Donec non orci vulputate, elementum lorem sit amet, dignissim velit. Phasellus eu leo eu eros hendrerit fermentum in sed enim. Pellentesque tortor arcu, consectetur vitae lacus in, euismod pretium massa. Vestibulum dignissim ultrices suscipit. Integer et nisl massa. Aliquam porta felis vel justo posuere, sit amet pulvinar orci consectetur. Donec eget congue dolor. Maecenas lobortis ante eget metus iaculis, ac gravida nisi gravida. In hac habitasse platea dictumst. Maecenas ac lacus justo. Cras quis nulla rhoncus, mattis enim nec, elementum orci. Phasellus vel risus finibus, aliquam enim ut, luctus nisl.

Proin convallis, neque non tristique molestie, enim sapien gravida ante, nec condimentum massa eros id odio. Aliquam consectetur viverra risus, vitae tincidunt ipsum accumsan sit amet. Suspendisse accumsan elementum felis vitae hendrerit. Curabitur luctus rhoncus nisi, id accumsan enim fermentum congue. Sed a elit a arcu vehicula accumsan. Morbi ac mi sed augue venenatis semper volutpat sit amet arcu. Vivamus eu ligula imperdiet, gravida orci vel, lobortis ipsum. Sed eu ultrices ligula.</div>
        </div>
      </div>
  );
});

export default ArtistBio;