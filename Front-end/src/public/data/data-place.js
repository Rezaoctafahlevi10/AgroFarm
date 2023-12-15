const dataPlace = {
  'Aceh': ['Aceh Barat', 'Aceh Barat Daya', 'Aceh Besar', 'Aceh Jaya', 'Aceh Selatan', 'Aceh Singkil', 'Aceh Tamiang', 'Aceh Tengah', 'Aceh Tenggara', 'Aceh Timur', 'Aceh Utara', 'Banda Aceh', 'Bener Meriah', 'Bireun', 'Gayo Lues', 'Langsa', 'Lhokseumawe', 'Nagan Raya', 'Pidie', 'Pidie Jaya', 'Sabang', 'Simeulue', 'Subulussalam'],

  'Bali': ['Amlapura', 'Bangli', 'Denpasar', 'Gianyar', 'Mengwi', 'Negara', 'Semarapura', 'Singaraja', 'Tabanan'],

  'Bangka Belitung': ['Jebus', 'Koba', 'Manggar', 'Mentok', 'Pangkal Pinang', 'Selat Nasik', 'Sungai Liat', 'Sungai Selan', 'Tanjung Pandan', 'Toboali', 'Pelabuhan Belinyu'],

  'Banten': ['Anyer', 'Bayah', 'Binuangen', 'Bojonegara', 'Carita', 'Ciruas', 'Gunung kencana', 'Kab. Lebak', 'Kota Cilegon', 'Kota Tangerang', 'Labuan', 'Malingping', 'Pandeglang', 'Pelabuhan Merak', 'Rangkasbitung', 'Serang', 'Serpong', 'Tigaraksa'],

  'Bengkulu': ['Bengkulu', 'Bengkulu Selatan', 'Bengkulu Tengah', 'Bengkulu Utara', 'Kaur', 'Kepahiang', 'Lebong', 'Mukomuko', 'Rejang Lebong', 'Seluma'],

  'DI Yogyakarta': ['Bantul', 'Sleman', 'Wates', 'Gunung Kidul', 'Yogyakarta'],

  'DKI Jakarta': ['Jakarta Barat', 'Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Timur', 'Jakarta Utara', 'Kepulauan Seribu'],

  'Gorontalo': ['Gorontalo', 'Kab. Boalemo', 'Kab. Bone Bolango', 'Kab. Gorontalo', 'Kab. Gorontalo Utara', 'Kab. Pahuwato'],

  'Jambi': ['Bangko Barat', 'Bulian', 'Bungo', 'Jambi', 'Siulak', 'Kuala Tungkal', 'Sabak', 'Sakernan', 'Sarolangun', 'Sungai Penuh', 'Tebo'],

  'Jawa Barat': ['Bandung', 'Banjar', 'Bekasi', 'Ciamis', 'Cianjur', 'Cibinong', 'Cikarang', 'Cimahi', 'Cipanas', 'Cirebon', 'Cisarua', 'Depok', 'Gadog', 'Garut', 'Indramayu', 'Karawang', 'Kota Bogor', 'Kuningan', 'Lembang', 'Majalengka', 'Parigi', 'Pelabuhan Ratu', 'Purwakarta', 'Singaparna', 'Soreang', 'Subang', 'Kab.Sukabumi', 'Sumber', 'Sumedang', 'Tasikmalaya', 'Pelabuhan Ratu'],

  'Jawa Tengah': ['Banjarnegara', 'Batang', 'Blora', 'Boyolali', 'Brebes', 'Cilacap', 'Demak', 'Jepara', 'Kajen', 'Karanganyar', 'Kebumen', 'Kendal', 'Klaten', 'Kudus', 'Magelang', 'Mungkid', 'Pati', 'Pekalongan', 'Pemalang', 'Purbalingga', 'Purwodadi', 'Purwokerto', 'Purworejo', 'Rembang', 'Salatiga', 'Semarang', 'Slawi', 'Sragen', 'Sukoharjo', 'Surakarta', 'Tegal', 'Temanggung', 'Ungaran', 'Wonogiri', 'Wonosobo', 'Pelabuhan Semarang'],

  'Jawa Timur': ['Bangkalan', 'Banyuwangi', 'Batu', 'Bojonegoro', 'Bondowoso', 'Gresik', 'Jember', 'Jombang', 'Kabupaten Blitar', 'Kabupaten Kediri', 'Kabupaten Madiun', 'Kabupaten Malang', 'Kabupaten Mojokerto', 'Kabupaten Pasuruan', 'Kabupaten Probolinggo', 'Kota Blitar', 'Kota Kediri', 'Kota Madiun', 'Kota Malang', 'Kota Mojokerto', 'Kota Pasuruan', 'Kota Probolinggo', 'Lamongan', 'Lumajang', 'Magetan', 'Nganjuk', 'Ngawi', 'Pacitan', 'Pamekasan', 'Ponorogo', 'Sampang', 'Sidoarjo', 'Situbondo', 'Sumenep', 'Surabaya', 'Trenggalek', 'Tuban', 'Tulungagung', 'Pelabuhan Surabaya'],

  'Kalimantan Barat': ['Bengkayang', 'Kapuas Hulu', 'Kayong Utara', 'Ketapang', 'Kubu Raya', 'Landak', 'Melawi', 'Mempawah', 'Pontianak', 'Sambas', 'Sanggau', 'Sekadau', 'Singkawang', 'Sintang', 'Sungai Raya'],

  'Kalimantan Selatan': ['Amuntai', 'Banjarbaru', 'Banjarmasin', 'Barabai', 'Batulicin', 'Kandangan', 'Kotabaru', 'Marabahan', 'Martapura', 'Paringin', 'Pelaihari', 'Rantau', 'Tanjung'],

  'Kalimantan Tengah': ['Buntok', 'Kasongan', 'Kuala Kapuas', 'Kuala Kurun', 'Kuala Pembuang', 'Muarateweh', 'Nanga Bulik', 'Palangkaraya', 'Pangkalan Bun', 'Pulangpisau', 'Puruk Cahu', 'Sampit', 'Sukamara', 'Tamiang Layang', 'Pelabuhan Sampit'],

  'Kalimantan Timur': ['Balikpapan', 'Bontang', 'Penajam', 'Samarinda', 'Sendawar', 'Sengata', 'Tanah Grogot', 'Tanjung Redeb', 'Tenggarong', 'Pelabuhan Balikpapan', 'Pelabuhan Nunukan', 'Pelabuhan Tarakan'],

  'Kalimantan Utara': ['Malinau', 'Nunukan', 'Tana Tidung', 'Tanjung Selor', 'Tarakan', 'Pelabuhan Balikpapan', 'Pelabuhan Nunukan', 'Pelabuhan Tarakan'],

  'Kepulauan Riau': ['Batam', 'Bintan', 'Daik Lingga', 'Ranai', 'Tanjung Balai Karimun', 'Tanjung Pinang', 'Kab. Anambas', 'Pelabuhan Batam', 'Pelabuhan Tarempa'],

  'Lampung': ['Bandar Lampung', 'Blambangan Umpu', 'Gedong Tataan', 'Gunung Sugih', 'Kalianda', 'Kota Agung', 'Kotabumi', 'Krui', 'Liwa', 'Menggala', 'Metro', 'Panaragan Jaya', 'Pringsewu', 'Sukadana', 'Wiralaga Mulya'],

  'Maluku': ['Ambon', 'Bula', 'Dobo', 'Kisar', 'Leksula', 'Masohi', 'Namlea', 'Piru', 'Saumlaki', 'Tual', 'Pelabuhan Ambon', 'Pelabuhan Bula', 'Pelabuhan Dobo', 'Pelabuhan Namlea', 'Pelabuhan Saumlaki', 'Pelabuhan Tual'],

  'Maluku Utara': ['Jailolo', 'Labuha', 'Maba', 'Morotai', 'Sanana', 'Sofifi', 'Taliabu', 'Ternate', 'Tidore', 'Tobelo', 'Weda'],
  'Nusa Tenggara Barat': ['Dompu', 'Gerung', 'Kota Bima', 'Mataram', 'Praya', 'Sape', 'Selong', 'Sumbawa Besar', 'Taliwang', 'Tanjung', 'Pelabuhan Bima'],

  'Nusa Tenggara Timur': ['Atambua', 'Ba a', 'Bajawa', 'Betun', 'Borong', 'Ende', 'Kalabahi', 'Kefamenanu', 'Kupang', 'Labuan Bajo', 'Larantuka', 'Lewoleba', 'Maumere', 'Mbay', 'Oelamasi', 'Ruteng', 'Sabu', 'Soe', 'Waibakul', 'Waikabubak', 'Waingapu', 'Weetabula', 'Pelabuhan Ende', 'Pelabuhan Kalabahi', 'Pelabuhan Kupang', 'Pelabuhan Larantuka', 'Pelabuhan Lewoleba', 'Pelabuhan Maumere', 'Pelabuhan Waingapu'],

  'Papua': ['Kab. Asmat', 'Kab. Biak Numfor', 'Kab. Boven Digoel - Tanah Merah', 'Kab. Deiyai', 'Kab. Dogiyai', 'Kab. Intan Jaya ', 'Kab. Jayapura ', 'Kab. Jayawijaya ', 'Kab. Keerom ', 'Kab. Kepulauan Yapen', 'Kab. Lanny Jaya ', 'Kab. Mamberamo Raya', 'Kab. Mamberamo Tengah', 'Kab. Mappi', 'Kab. Merauke', 'Kab. Mimika ', 'Kab. Nabire', 'Kab. Ndunga ', 'Kab. Paniai', 'Kab. Pegunungan Bintang ', 'Kab. Puncak ', 'Kab. Puncak Jaya ', 'Kab. Sarmi', 'Kab. Supiori ', 'Kab. Tolikara ', 'Kab. Waropen', 'Kab. Yalimo', 'Kota Jayapura', 'Yahukimo '],

  'Papua Barat': ['Aimas', 'Bintuni', 'Fakfak', 'Kaimana', 'Kumurkek', 'Manokwari', 'Ransiki', 'Sorong', 'Teminabuan', 'Waisai', 'Wasior'],

  'Riau': ['Bagan Siapiapi', 'Bangkinang', 'Bengkalis', 'Dumai', 'Pangkalan Kerinci', 'Pasir Pengarairan', 'Pekanbaru', 'Rengat', 'Selat panjang', 'Siak Sri Indrapura', 'Teluk Kuantan', 'Tembilahan'],

  'Sulawesi Barat': ['Majene', 'Mamasa', 'Mamuju', 'Mamuju Tengah', 'Mamuju Utara', 'Polewali Mandar'],

  'Sulawesi Selatan': ['Pelabuhan Barru', 'Bantaeng', 'Barru', 'Benteng', 'Bulukumba', 'Enrekang', 'Jeneponto', 'Makale', 'Makassar', 'Malili', 'Maros', 'Masamba', 'Palopo', 'Pangkajene dan Kepulauan', 'Pare Pare', 'Pinrang', 'Rantepao', 'Sengkang', 'Sidenreng', 'Sinjai', 'Sungguminasa', 'Takalar', 'Watampone', 'Watan Soppeng'],

  'Sulawesi Tengah': ['Banggai', 'Kolonedale', 'Luwuk', 'Pelabuhan Poso', 'Ampana', 'Bungku', 'Buol', 'Donggala', 'Luwuk', 'Palu', 'Parigi', 'Poso', 'Salakan', 'Sigi Biromaru', 'Toli Toli'],

  'Sulawesi Tenggara': ['Pelabuhan Kendari', 'Pelabuhan Raha', 'Bau Bau', 'Bombana', 'Buranga', 'Buton', 'Kolaka', 'Kolaka Utara', 'Konawe', 'Konawe Selatan', 'Kota Kendari', 'Raha', 'Wanggudu', 'Wangi Wangi'],

  'Sulawesi Utara': ['Pelabuhan Tahuna', 'Air Madidi', 'Amurang', 'Bitung', 'Boroko', 'Kotamobagu', 'Lolak', 'Manado', 'Melongguane', 'Ondong Siau', 'Ratahan', 'Tahuna', 'Tomohon', 'Tondano'],

  'Sumatera Barat': ['Arosuka', 'Batusangkar', 'Bukittinggi', 'Lubuk Basung', 'Lubuk Sikaping', 'Muaro Sijunjung', 'Padang', 'Padang Aro', 'Padangpanjang', 'Painan', 'Pariaman', 'Parit Malintang', 'Payakumbuh', 'Pulau Punjung', 'Sarilamak', 'Sawahlunto', 'Simpang Empat', 'Solok', 'Tuapejat'],

  'Sumatera Selatan': ['Martapura', 'Baturaja', 'Indralaya', 'Kayu Agung', 'Lahat', 'Lubuk Linggau', 'Martapura', 'Muaradua', 'Muara Enim', 'Muara Rumpit', 'Musirawas', 'Pagar Alam', 'Palembang', 'Pangkalan Balai', 'Prabumulih', 'Sekayu', 'Talang Ubi', 'Tebing Tinggi'],

  'Sumatera Utara': ['Aek Kanopan', 'Balige', 'Binjai Kota', 'Dolok Sanggul', 'Gunung Sitoli', 'Gunung Tua', 'Kabanjahe', 'Kisaran', 'Kota Pinang', 'Lahomi', 'Lima Puluh', 'Lotu', 'Lubuk Pakam', 'Medan', 'Padang Sidempuan', 'Pandan', 'Pangururan', 'Panyabungan', 'Pematang Raya', 'Pematang Siantar', 'Rantau Prapat', 'Salak', 'Sei Rampah', 'Sibolga', 'Sibuhuan', 'Sidikalang', 'Sipirok', 'Stabat', 'Tanjung Balai', 'Tarutung', 'Tebing Tinggi', 'Teluk Dalam'],

  'Indonesia': ['Banda Aceh', 'Denpasar', 'Serang', 'Bengkulu', 'Yogyakarta', 'Jakarta Pusat', 'Gorontalo', 'Jambi', 'Bandung', 'Semarang', 'Surabaya', 'Pontianak', 'Banjarmasin', 'Palangkaraya', 'Samarinda', 'Tarakan', 'Pangkal Pinang', 'Tanjung Pinang', 'Bandar Lampung', 'Ambon', 'Ternate', 'Mataram', 'Kupang', 'Kota Jayapura', 'Manokwari', 'Pekanbaru', 'Mamuju', 'Makassar', 'Kendari', 'Manado', 'Padang', 'Palembang', 'Medan'],
};

export default dataPlace;
