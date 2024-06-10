export default function Ubicacion() {
    return(
        <div>
            <div id="ubicacion" className="mt-32 mb-12 mx-12">
                <p className="text-xl font-semibold text-green-700">Ubicación</p>
                <hr className="border-green-600" />
            </div>
            <div className="w-full flex justify-center mt-20">
                <iframe className="shadow-2xl shadow-gray-400 rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.673727231047!2d-64.19061722526124!3d-31.423114296574987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a285ed9d40ff%3A0x90f76669844263d3!2sSan%20Luis%2071%2C%20X5000BAA%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1714326398044!5m2!1ses-419!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}