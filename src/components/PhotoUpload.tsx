import { Camera, Upload, X, Check } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PhotoUploadProps {
  onPhotoSelect?: (file: File) => void;
  maxPhotos?: number;
}

export function PhotoUpload({ onPhotoSelect, maxPhotos = 5 }: PhotoUploadProps) {
  const [photos, setPhotos] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    files.forEach(file => {
      if (photos.length < maxPhotos) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPhotos(prev => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
        onPhotoSelect?.(file);
      }
    });
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-[14px] text-secondary">Photo Evidence</p>
        <p className="text-[12px] text-tertiary">{photos.length}/{maxPhotos}</p>
      </div>
      
      <div className="grid grid-cols-3 gap-3">
        <AnimatePresence>
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative aspect-square rounded-[12px] overflow-hidden bg-surface-2"
            >
              <img src={photo} alt={`Upload ${index + 1}`} className="w-full h-full object-cover" />
              <button
                onClick={() => removePhoto(index)}
                className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center"
              >
                <X className="w-4 h-4 text-white" />
              </button>
              <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-success flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {photos.length < maxPhotos && (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="aspect-square rounded-[12px] bg-surface-2 border-2 border-dashed border-border flex flex-col items-center justify-center gap-1 hover:bg-surface-3 active:scale-95 transition-all"
          >
            <Camera className="w-6 h-6 text-text-tertiary" />
            <span className="text-[11px] text-tertiary">Add Photo</span>
          </button>
        )}
      </div>
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileSelect}
        className="hidden"
        capture="environment"
      />
      
      {photos.length > 0 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full bg-primary text-white py-3 rounded-[12px] flex items-center justify-center gap-2 hover:bg-primary-dark active:scale-98 transition-all"
        >
          <Upload className="w-5 h-5" />
          Submit {photos.length} Photo{photos.length > 1 ? 's' : ''}
        </motion.button>
      )}
    </div>
  );
}
