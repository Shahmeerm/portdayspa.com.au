import React from 'react';

import Service from '../utils/Service';
import ServicesMenu from '../ServicesMenu';

const Body = () => {
  return (
    <>
      <ServicesMenu service="Body" />
      <div className="px-4">
        <h3 className="font-bold mt-6 uppercase">Body treatments</h3>
        <p>
          Help relieve your body of modern dat pollutants, stress and lack of
          focus by indulging in a body treatment.
        </p>
        <Service title="Warm Oil Wrap" price="$132*" time="75mins">
          This delicious treatment begins with a full body coconut sugar scrub,
          followed by a hydrating wrap utilising exotic oils combined with
          luxurious body butter to leave skin feeling soft and smooth.
          <p className="mt-0">
            <small>*With 60min renewal massage: $220</small>
          </p>
        </Service>
        <Service title="Sugar Glow" price="$94*" time="45mins">
          Full body exfoliation using a coconut sugar scrub designed to gently
          buff and rehydrate. Leave skin feeling soft and smooth with a lather
          of nourishing body butter.
        </Service>
        <h3 className="font-bold mt-6 uppercase">Massage</h3>
        <p>
          Bring body, mind and spirit into a state of relaxation where healing
          begins. For maximum benefits a course of massage is recommended.{' '}
          <br />
          <strong>Ask about our massage packages and payment plans.</strong>
        </p>
        <Service title="Renewal massage" price="$149" time="90mins">
          Smooth flowing massage to help reduce stress, improve circulation
          &amp; provide deep relaxation to recharge &amp; rejuvenate.
          <p className="mt-0">
            <small>*60min - $90, 30min - $75</small>
          </p>
        </Service>
        <Service
          title="Remedial massage (health fund accredited)"
          price="$149"
          time="90mins"
        >
          For the treatment of muscles, tendons, ligaments and connective
          tissues of the body to assist in rehabilitation, pain and injury
          management.
          <p className="mt-0">
            <small>*60min - $90, 45min - $87, 30min - $75</small>
          </p>
        </Service>
        <Service title="Aromatherapy" price="$149" time="90mins">
          A relaxing &amp; healing massage utilising essential oils.
          <p className="mt-0">
            <small>*60min - $99, 30min - $75</small>
          </p>
        </Service>
        <Service title="Pregnancy Massage" price="$60" time="60mins">
          Bringing a new life into the world is an amazing experience, though
          the 9 month pregnancy can be challenging and stressful on the body.
          Through the use of our pregnancy pillow, specially designed to enable
          you to lay comfortably on your stomach, we will relive any aches and
          pains, transporting you to a state of pure bliss. <br />
          We recommend avoiding massage during your 1st trimester.
          <p className="mt-0">
            <small>*60min - $99, 45min - $87, 30min - $75</small>
          </p>
        </Service>
        <Service title="Hot Stone Massage" price="$186" time="90mins">
          Using hot stones in combination with massage techniques to bring about
          a feeling of deep relaxation &amp; well being.
          <p className="mt-0">
            <small>*60min - $139, 30min - $89</small>
          </p>
        </Service>
      </div>
    </>
  );
};

export default Body;
