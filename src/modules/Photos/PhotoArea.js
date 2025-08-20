import Photos from '@/data/photos';
import 'yet-another-react-lightbox/styles.css';
import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });

export default function PhotoArea() {
const [open, setOpen] = useState(false);
const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className="it-team-3-area it-team-3-style-2  it-team-3-style-3 pt-5 pb-5">
        <div className="container">
          <div className="row">
            {/* Lightbox should be placed outside the loop */}
           <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={Photos.map(photo => ({ src: photo.image, width: 422, height: 710 }))}
              index={currentIndex} // Start from the clicked image
              controller={{ closeOnBackdropClick: true }}
            />

            <div id="it-gallery" className="it-gallery-area p-relative grey-bg-2 pt-20 pb-20">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="it-gallery-title-box text-center pb-20">
                      <h2 className="it-section-title-3">Photo Gallery</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {Photos.slice(0, 20).map((photo) => (
                    <div className="col-xl-4 col-lg-6" key={photo.image}>
                      <div className="it-gallery-item p-relative">
                        <div className="it-gallery-thumb">
                        <Image
                          src={photo.image}
                          alt=""
                          width={422}
                          height={710}
                          style={{ height: 'auto' }}
                        />

                        </div>
                        <div className="it-gallery-icon">
                          <button 
                            className="popup-image" 
                            onClick={() => { setCurrentIndex(Photos.indexOf(photo)); setOpen(true); }}>
                            <i className="fa-light fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}