class FileManager {

   

    get kalibratorPDF () {
        return $('//XCUIElementTypeCell[@name="kalibrator, pdf"]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeImage');
    }

    constructor() {
        // Pastikan untuk mengatur elemen yang relevan di sini
        this.dokumenSelector = '//XCUIElementTypeCell[@name="kalibrator, pdf"]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeImage'; // Ganti dengan selector yang sesuai
    }

    async pilihDokumen(kalibrator) {
        // Asumsikan ada beberapa langkah untuk memilih dokumen
        // Misalnya, temukan elemen dan klik
        const dokumen = await $(this.dokumenSelector);
        await dokumen.click();
    }

    

}

module.exports = new FileManager();