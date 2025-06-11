import React, { useState } from 'react';
import allModalImagesDataJson from '../../assets/outfits.json';


export interface ImageObject {
  id: string;
  url: string;
  alt: string;
}

export interface ModalImageData {
  [outfitSetKey: string]: ImageObject[]; 
}

export interface OutfitDisplayProps {
  outfitSetKey: string; 
}

const allModalImagesData: ModalImageData = allModalImagesDataJson as ModalImageData;

const OutfitDisplay: React.FC<OutfitDisplayProps> = ({ outfitSetKey }) => {
  const [showOutfitImages, setShowOutfitImages] = useState<boolean>(false);

  const handleShowImages = () => {
    setShowOutfitImages(!showOutfitImages);
  };

  const currentImages: ImageObject[] = allModalImagesData[outfitSetKey] || [];

  return (
    <div>
      {showOutfitImages && (
        <div className="outfit-images mt-2">
          {currentImages.length > 0 ? (
            currentImages.map((image) => (
              <img
                key={image.id}
                src={image.url}
                alt={image.alt}
                className="img-fluid p-2"
              />
            ))
          ) : (
            <p>No hay imágenes disponibles para esta selección.</p>
          )}
        </div>
      )}
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleShowImages}
        >
          {showOutfitImages ? 'Ocultar Ideas' : 'Ver Ideas de Outfits'}
        </button>
      </div>
    </div>
  );
};

export default OutfitDisplay;