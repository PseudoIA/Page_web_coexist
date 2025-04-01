from PIL import Image
import os

def optimize_images(input_folder, output_folder, max_width=1080, quality=85, convert_to_webp=True):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    for filename in os.listdir(input_folder):
        if filename.lower().endswith(('png', 'jpg', 'jpeg', 'webp')):
            img_path = os.path.join(input_folder, filename)
            img = Image.open(img_path)
            
            # Redimensionar manteniendo la relación de aspecto
            width_percent = max_width / float(img.width)
            new_height = int(float(img.height) * width_percent)
            img = img.resize((max_width, new_height), Image.LANCZOS)
            
            # Definir nuevo nombre y formato
            new_filename = os.path.splitext(filename)[0] + ('.webp' if convert_to_webp else os.path.splitext(filename)[1])
            output_path = os.path.join(output_folder, new_filename)
            
            # Guardar imagen optimizada
            img.save(output_path, format="WEBP" if convert_to_webp else img.format, quality=quality)
            print(f"✅ {filename} optimizado y guardado como {new_filename}")

# --- Configuración ---
input_folder = r"C:\Users\bbarrera\Downloads\Proyectos\web coexist\images"  # Carpeta de imágenes de entrada
output_folder = r"C:\Users\bbarrera\Downloads\Proyectos\web coexist\images"  # Carpeta de salida

optimize_images(input_folder, output_folder)
