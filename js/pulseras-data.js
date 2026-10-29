// Catálogo Oficial de Pulseras de Ámbar de Chiapas
// WhatsApp directo: +52 961 749 6409
const PULSERAS_DATA = [
  {
    "id": "AMB-001",
    "file": "images/amb-001.jpg",
    "title": "Pulsera Armonía 7 Chakras & Howlite Ajustable",
    "category": "chakras",
    "categoryName": "7 Chakras",
    "amberType": "Ámbar Genuino de Chiapas",
    "materials": [
      "Ámbar amarillo miel",
      "Howlite blanco veteado",
      "7 piedras de chakras",
      "Separadores plateados"
    ],
    "closure": "Nudo corredizo ajustable estilo macramé",
    "badge": "Más pedida",
    "featured": true,
    "description": "Diseño espiritual que alinea los 7 chakras con cuentas de howlite blanca y una esfera central de ámbar chiapaneco que irradia calidez y protección.",
    "meaning": "Paz interior, equilibrio energético y transmutación."
  },
  {
    "id": "AMB-002",
    "file": "images/amb-002.jpg",
    "title": "Pulsera Serenidad Howlite & 7 Chakras",
    "category": "chakras",
    "categoryName": "7 Chakras",
    "amberType": "Ámbar Amarillo Miel Chiapaneco",
    "materials": [
      "Ámbar natural de Chiapas",
      "Howlite turquesa blanca",
      "Gemas de 7 chakras"
    ],
    "closure": "Nudo corredizo ajustable estilo macramé",
    "badge": "Favorita",
    "featured": false,
    "description": "Acabado fino con hilo encerado resistente, piedras naturales seleccionadas y ámbar mexicano auténtico con brillo natural bajo la luz.",
    "meaning": "Claridad mental y serenidad espiritual."
  },
  {
    "id": "AMB-003",
    "file": "images/amb-003.jpg",
    "title": "Pulsera Rosa Fucsia Craquelado & Trilogía de Ámbar",
    "category": "cristales",
    "categoryName": "Cristales & Color",
    "amberType": "Ámbar Amarillo Limón y Miel",
    "materials": [
      "Cristales craquelados fucsia brillante",
      "3 cuentas de ámbar facetado",
      "Rondelles de strass con brillo"
    ],
    "closure": "Elástica reforzada de alta resistencia",
    "badge": "Popular",
    "featured": true,
    "description": "Intensa tonalidad fucsia con cristales que reflejan la luz, combinada con tres gemas centrales de ámbar auténtico y detalles en tono dorado.",
    "meaning": "Alegría, vitalidad y atracción de amor propio."
  },
  {
    "id": "AMB-004",
    "file": "images/amb-004.jpg",
    "title": "Pulsera Elástica 7 Chakras & Howlite Natural",
    "category": "chakras",
    "categoryName": "7 Chakras",
    "amberType": "Ámbar Miel Chiapas",
    "materials": [
      "Howlite natural pulida",
      "7 piedras de alineación",
      "Ámbar de Simojovel"
    ],
    "closure": "Elástica reforzada premium",
    "badge": "Natural",
    "featured": false,
    "description": "Comodidad absoluta al colocarse. Las vetas naturales del howlite blanco contrastan con la luminosidad translúcida del ámbar de Chiapas.",
    "meaning": "Protección durante viajes y meditación."
  },
  {
    "id": "AMB-005",
    "file": "images/amb-005.jpg",
    "title": "Pulsera Protección Ónix Negro & Trío de Ámbar",
    "category": "proteccion",
    "categoryName": "Protección Ónix",
    "amberType": "Ámbar Miel Dorado con Inclusiones",
    "materials": [
      "Ónix negro brillante pulido",
      "3 esferas de ámbar de Chiapas",
      "Cuentas esféricas doradas"
    ],
    "closure": "Elástica reforzada premium",
    "badge": "Protección",
    "featured": true,
    "description": "Un clásico atemporal de elegancia y misticismo. La piedra negra neutraliza vibraciones densas mientras el ámbar chiapaneco aporta fuerza solar.",
    "meaning": "Escudo energético y seguridad personal."
  },
  {
    "id": "AMB-006",
    "file": "images/amb-006.jpg",
    "title": "Pulsera Azul Océano Satinado & Ámbar Imperial",
    "category": "cristales",
    "categoryName": "Cristales & Color",
    "amberType": "Ámbar Chiapaneco Seleccionado",
    "materials": [
      "Cuentas de cristal azul marino mate satinado",
      "Trilogía de ámbar facetado",
      "Separadores con incrustaciones"
    ],
    "closure": "Elástica reforzada premium",
    "badge": "Exclusiva",
    "featured": false,
    "description": "Tacto aterciopelado en azul profundo combinado con el fuego cálido de tres gemas de ámbar natural y arillos de pedrería fina.",
    "meaning": "Tranquilidad, fluidez emocional y enfoque."
  },
  {
    "id": "AMB-007",
    "file": "images/amb-007.jpg",
    "title": "Pulsera Turquesa Imperial & Ámbar Chiapaneco",
    "category": "cristales",
    "categoryName": "Cristales & Color",
    "amberType": "Ámbar Miel y Ámbar Rojizo",
    "materials": [
      "Piedra turquesa natural veteada",
      "Piezas de ámbar tallado",
      "Separadores de zirconia dorada"
    ],
    "closure": "Elástica reforzada premium",
    "badge": "Más pedida",
    "featured": true,
    "description": "El verde azulado de la turquesa mexicana combinado con la resina fósil milenaria de Chiapas crea una pieza de orfebrería artesanal vibrante.",
    "meaning": "Buena fortuna, sanación y prosperidad."
  },
  {
    "id": "AMB-008",
    "file": "images/amb-008.jpg",
    "title": "Pulsera Zafiro Real Craquelado & Ámbar Miel",
    "category": "cristales",
    "categoryName": "Cristales & Color",
    "amberType": "Ámbar Genuino Chiapas",
    "materials": [
      "Cristal craquelado azul cobalto",
      "3 gemas de ámbar natural",
      "Rondelles destellantes"
    ],
    "closure": "Elástica reforzada premium",
    "badge": "Brillante",
    "featured": false,
    "description": "El azul profundo de los cristales resalta la pureza y los destellos dorados del ámbar auténtico de Simojovel.",
    "meaning": "Sabiduría, intuición y nobleza."
  },
  {
    "id": "AMB-009",
    "file": "images/amb-009.jpg",
    "title": "Pulsera Turquesa Cielo & Trilogía de Ámbar",
    "category": "cristales",
    "categoryName": "Cristales & Color",
    "amberType": "Ámbar Amarillo Miel Chiapaneco",
    "materials": [
      "Turquesa matriz veteada",
      "3 cuentas de ámbar facetado",
      "Arillos dorados de cristal"
    ],
    "closure": "Elástica reforzada premium",
    "badge": "Piedra natural",
    "featured": false,
    "description": "Cada esfera de turquesa tiene vetas únicas irrepetibles, acompañadas de ámbar de calidad superior con tono miel cálido.",
    "meaning": "Protección contra el mal de ojo y armonía."
  },
  {
    "id": "AMB-010",
    "file": "images/amb-010.jpg",
    "title": "Pulsera Resplandor Mandarina & Ámbar Solar",
    "category": "cristales",
    "categoryName": "Cristales & Color",
    "amberType": "Ámbar Amarillo y Naranja Fuego",
    "materials": [
      "Cristales facetados color ámbar naranja",
      "3 piezas de ámbar natural",
      "Detalles dorados"
    ],
    "closure": "Elástica reforzada premium",
    "badge": "Pieza única",
    "featured": true,
    "description": "Tonalidad monocromática en la gama del fuego y el sol. Los cristales facetados capturan la luz amplificando el brillo del ámbar chiapaneco.",
    "meaning": "Éxito, creatividad y vitalidad física."
  },
  {
    "id": "AMB-011",
    "file": "images/amb-011.jpg",
    "title": "Pulsera Ébano Imperial & Ámbar Miel Macramé",
    "category": "proteccion",
    "categoryName": "Protección Ónix",
    "amberType": "Ámbar Miel con Inclusiones",
    "materials": [
      "Ónix negro azabache",
      "Pieza de ámbar pulida",
      "Hilo negro trenzado"
    ],
    "closure": "Nudo corredizo ajustable estilo macramé",
    "badge": "Amuleto",
    "featured": false,
    "description": "Ajuste perfecto a cualquier muñeca. El ámbar de Simojovel destaca como un punto de luz radiante entre las cuentas de ónix negro.",
    "meaning": "Fuerza de voluntad y resguardo espiritual."
  },
  {
    "id": "AMB-012",
    "file": "images/amb-012.jpg",
    "title": "Pulsera Ónix Clásica con Centro de Ámbar",
    "category": "proteccion",
    "categoryName": "Protección Ónix",
    "amberType": "Ámbar de Chiapas Certificado",
    "materials": [
      "Piedra natural ónix negro",
      "Esfera de ámbar miel"
    ],
    "closure": "Nudo corredizo ajustable estilo macramé",
    "badge": "Unisex",
    "featured": false,
    "description": "Diseño sobrio y elegante apto para dama o caballero, ideal para llevar puesto todos los días.",
    "meaning": "Enraizamiento y disipación de temores."
  },
  {
    "id": "AMB-013",
    "file": "images/amb-013.jpg",
    "title": "Pulsera Boho Fiesta & Pepitas de Ámbar Geométrico",
    "category": "boho",
    "categoryName": "Boho & Étnica",
    "amberType": "Ámbar Genuino Geométrico",
    "materials": [
      "Discos de fimo multicolor (azul, blanco, rosa, mandarina)",
      "Barriletes de ámbar facetado",
      "Balines dorados"
    ],
    "closure": "Elástica reforzada premium",
    "badge": "Artesanal",
    "featured": true,
    "description": "Estilo bohemio contemporáneo con capas de discos fimo artesanales y cortes geométricos de ámbar natural de Chiapas distribuidos en toda la pulsera.",
    "meaning": "Alegría de vivir, originalidad y juventud."
  },
  {
    "id": "AMB-014",
    "file": "images/amb-014.jpg",
    "title": "Pulsera Etnia Chiapaneca & Ámbar Facetado",
    "category": "boho",
    "categoryName": "Boho & Étnica",
    "amberType": "Ámbar Amarillo Miel Chiapaneco",
    "materials": [
      "Discos poliméricos artesanales",
      "Gemas de ámbar pulidas",
      "Separadores dorados"
    ],
    "closure": "Elástica reforzada premium",
    "badge": "Artesanal",
    "featured": false,
    "description": "Inspirada en el folclor chiapaneco, combina el dinamismo de los colores con la autenticidad del ámbar mexicano.",
    "meaning": "Conexión cultural y optimismo."
  },
  {
    "id": "AMB-015",
    "file": "images/amb-015.jpg",
    "title": "Pulsera Esmeralda Iridiscente & Gemas de Ámbar",
    "category": "cristales",
    "categoryName": "Cristales & Color",
    "amberType": "Ámbar Miel con Matices Verdosos",
    "materials": [
      "Cristales facetados verde esmeralda con reflejo tornasol",
      "2 esferas de ámbar Chiapas",
      "Rondelles con incrustaciones"
    ],
    "closure": "Elástica reforzada premium",
    "badge": "Exclusiva",
    "featured": true,
    "description": "El brillo tornasol verde azulado combinado con las gemas de ámbar miel genera un efecto visual hipnótico bajo la luz del sol.",
    "meaning": "Abundancia, renovación y equilibrio."
  },
  {
    "id": "AMB-016",
    "file": "images/amb-016.jpg",
    "title": "Pulsera Hematita & Ámbar Miel de Simojovel",
    "category": "proteccion",
    "categoryName": "Protección Ónix",
    "amberType": "Ámbar de Chiapas",
    "materials": [
      "Piedras oscuras pulidas",
      "Ámbar natural",
      "Separadores finos"
    ],
    "closure": "Elástica reforzada premium",
    "badge": "Mística",
    "featured": false,
    "description": "Acabado sobrio con reflejos metálicos y un núcleo cálido de ámbar natural chiapaneco.",
    "meaning": "Protección contra el cansancio mental."
  },
  {
    "id": "AMB-017",
    "file": "images/amb-017.jpg",
    "title": "Pulsera Ámbar Fuego & Cristales de Luz",
    "category": "cristales",
    "categoryName": "Cristales & Color",
    "amberType": "Ámbar Cognac y Miel",
    "materials": [
      "Cristal naranja transparente facetado",
      "Ámbar chiapaneco",
      "Separadores dorados"
    ],
    "closure": "Elástica reforzada premium",
    "badge": "Cálida",
    "featured": false,
    "description": "Una explosión de luz dorada en tu muñeca. Los tonos ámbar y los cristales brillan al unísono.",
    "meaning": "Entusiasmo y magnetismo personal."
  },
  {
    "id": "AMB-018",
    "file": "images/amb-018.jpg",
    "title": "Pulsera Nocturna Ónix & Pepita Central de Ámbar",
    "category": "proteccion",
    "categoryName": "Protección Ónix",
    "amberType": "Ámbar Natural Pulido",
    "materials": [
      "Esferas de ónix negro brillante",
      "Pieza de ámbar miel central"
    ],
    "closure": "Ajustable con cordón artesanal",
    "badge": "Unisex",
    "featured": false,
    "description": "Contraste perfecto entre la oscuridad del ónix y la luz dorada y transparente del ámbar.",
    "meaning": "Calma ante situaciones difíciles."
  },
  {
    "id": "AMB-019",
    "file": "images/amb-019.jpg",
    "title": "Pulsera Turquesa Marina & Ámbar Auténtico",
    "category": "cristales",
    "categoryName": "Cristales & Color",
    "amberType": "Ámbar Amarillo Miel",
    "materials": [
      "Piedra estilo turquesa",
      "Ámbar de Chiapas",
      "Arillos decorativos"
    ],
    "closure": "Elástica reforzada",
    "badge": "Tradicional",
    "featured": false,
    "description": "La frescura del color del agua marina aunada al ámbar fósil extraído de las minas de Simojovel.",
    "meaning": "Paz mental y buena comunicación."
  },
  {
    "id": "AMB-020",
    "file": "images/amb-020.jpg",
    "title": "Pulsera Bugambilia Mágica & Ámbar Dorado",
    "category": "cristales",
    "categoryName": "Cristales & Color",
    "amberType": "Ámbar Miel Chiapaneco",
    "materials": [
      "Cristales craquelados color bugambilia púrpura",
      "3 gemas de ámbar facetado",
      "Rondelles turquesa y strass"
    ],
    "closure": "Elástica reforzada premium",
    "badge": "Destacada",
    "featured": true,
    "description": "Un diseño alegre y distintivo con piedras craqueladas en tono magenta y detalles en turquesa que enmarcan el ámbar.",
    "meaning": "Transformación y alegría interior."
  },
  {
    "id": "AMB-021",
    "file": "images/amb-021.jpg",
    "title": "Pulsera Tierra Caliente Ónix & Ámbar Rojo",
    "category": "proteccion",
    "categoryName": "Protección Ónix",
    "amberType": "Ámbar Tono Cognac Chiapaneco",
    "materials": [
      "Piedras oscuras",
      "Ámbar de Chiapas tono cálido",
      "Hilo encerado"
    ],
    "closure": "Nudo corredizo ajustable",
    "badge": "Fuerza",
    "featured": false,
    "description": "Amuleto tradicional chiapaneco elaborado con nudo macramé resistente.",
    "meaning": "Coraje, determinación y seguridad."
  },
  {
    "id": "AMB-022",
    "file": "images/amb-022.jpg",
    "title": "Pulsera Minimal Ónix Negro & Esfera de Ámbar",
    "category": "proteccion",
    "categoryName": "Protección Ónix",
    "amberType": "Ámbar de Simojovel",
    "materials": [
      "Ónix pulido",
      "Ámbar natural de Chiapas"
    ],
    "closure": "Ajustable macramé",
    "badge": "Elegante",
    "featured": false,
    "description": "Líneas limpias y minimalistas para un look versátil que complementa cualquier atuendo formal o casual.",
    "meaning": "Equilibrio y templanza."
  },
  {
    "id": "AMB-023",
    "file": "images/amb-023.jpg",
    "title": "Pulsera Cuarzo Rosa Suave & Ámbar Chiapaneco",
    "category": "cristales",
    "categoryName": "Cristales & Color",
    "amberType": "Ámbar Miel y Cristal",
    "materials": [
      "Cuentas de cristal rosa cuarzo",
      "Ámbar natural",
      "Separadores dorados"
    ],
    "closure": "Elástica reforzada premium",
    "badge": "Elegante",
    "featured": false,
    "description": "Tonalidades suaves y femeninas que transmiten calma y elegancia natural.",
    "meaning": "Amor incondicional y ternura."
  },
  {
    "id": "AMB-024",
    "file": "images/amb-024.jpg",
    "title": "Pulsera Violeta Mística & Ámbar Genuino",
    "category": "cristales",
    "categoryName": "Cristales & Color",
    "amberType": "Ámbar Amarillo Miel",
    "materials": [
      "Cristales translúcidos violeta",
      "Ámbar de Chiapas",
      "Rondelles brillantes"
    ],
    "closure": "Elástica reforzada premium",
    "badge": "Espiritual",
    "featured": false,
    "description": "El violeta de la transmutación acompañado de la calidez solar del ámbar auténtico.",
    "meaning": "Transmutación de energía y elevación espiritual."
  },
  {
    "id": "AMB-025",
    "file": "images/amb-025.jpg",
    "title": "Pulsera Coral & Ámbar Chiapaneco",
    "category": "boho",
    "categoryName": "Boho & Étnica",
    "amberType": "Ámbar Miel",
    "materials": [
      "Piedras y cuentas artesanales",
      "Ámbar de Chiapas"
    ],
    "closure": "Elástica reforzada",
    "badge": "Artesanal",
    "featured": false,
    "description": "Diseño artesanal con tonos cálidos y detalles tradicionales chiapanecos.",
    "meaning": "Entusiasmo y vitalidad."
  },
  {
    "id": "AMB-026",
    "file": "images/amb-026.jpg",
    "title": "Pulsera Ojo de Tigre & Ámbar Imperial",
    "category": "proteccion",
    "categoryName": "Protección Ónix",
    "amberType": "Ámbar de Simojovel",
    "materials": [
      "Piedras ojo de tigre y ónix",
      "Ámbar de Chiapas"
    ],
    "closure": "Ajustable macramé",
    "badge": "Más pedida",
    "featured": false,
    "description": "Fusión de las propiedades del ojo de tigre con el ámbar fósil para un amuleto imponente.",
    "meaning": "Claridad en la toma de decisiones y prosperidad."
  },
  {
    "id": "AMB-027",
    "file": "images/amb-027.jpg",
    "title": "Pulsera Jade Selva & Ámbar Chiapaneco",
    "category": "cristales",
    "categoryName": "Cristales & Color",
    "amberType": "Ámbar Miel y Ámbar Verde",
    "materials": [
      "Piedras verde jade",
      "Ámbar natural de Chiapas"
    ],
    "closure": "Elástica reforzada",
    "badge": "Naturaleza",
    "featured": false,
    "description": "El color de la selva chiapaneca combinado con su tesoro más preciado: el ámbar.",
    "meaning": "Salud, abundancia y conexión con la naturaleza."
  },
  {
    "id": "AMB-028",
    "file": "images/amb-028.jpg",
    "title": "Pulsera Amatista Real & Ámbar de Simojovel",
    "category": "cristales",
    "categoryName": "Cristales & Color",
    "amberType": "Ámbar Amarillo Miel Chiapaneco",
    "materials": [
      "Cristales tono amatista",
      "Ámbar de Chiapas",
      "Arillos decorativos"
    ],
    "closure": "Elástica reforzada",
    "badge": "Serenidad",
    "featured": false,
    "description": "Elegante y mística combinación de amatista con ámbar chiapaneco.",
    "meaning": "Paz mental y protección psíquica."
  },
  {
    "id": "AMB-029",
    "file": "images/amb-029.jpg",
    "title": "Pulsera Obsidiana Fina & Gota de Ámbar Natural",
    "category": "proteccion",
    "categoryName": "Protección Ónix",
    "amberType": "Ámbar Genuino con Inclusiones",
    "materials": [
      "Esferas de obsidiana / ónix negro",
      "Gran pieza de ámbar natural tallada en gota",
      "Cuentas azul real"
    ],
    "closure": "Nudo corredizo ajustable estilo macramé",
    "badge": "Pieza única",
    "featured": true,
    "description": "Una impresionante gema de ámbar natural con vetas e inclusiones fósiles, custodiada por dos cuentas azul cobalto y esferas de obsidiana negra.",
    "meaning": "Poderoso escudo protector y conexión con la tierra."
  },
  {
    "id": "AMB-030",
    "file": "images/amb-030.jpg",
    "title": "Pulsera Mística Ónix & Ámbar con Cristales Azules",
    "category": "proteccion",
    "categoryName": "Protección Ónix",
    "amberType": "Ámbar Amarillo Miel con Vetas",
    "materials": [
      "Ónix negro azabache",
      "Ámbar de Chiapas nugget",
      "Dos gemas azul noche"
    ],
    "closure": "Nudo corredizo ajustable estilo macramé",
    "badge": "Protección",
    "featured": false,
    "description": "Acabado en macramé reforzado para llevar con comodidad todo el día, resistente y protector.",
    "meaning": "Aleja envidias y malas energías."
  },
  {
    "id": "AMB-031",
    "file": "images/amb-031.jpg",
    "title": "Pulsera Azabache & Ámbar Natural",
    "category": "proteccion",
    "categoryName": "Protección Ónix",
    "amberType": "Ámbar de Simojovel",
    "materials": [
      "Piedras negras pulidas",
      "Ámbar central"
    ],
    "closure": "Elástica reforzada",
    "badge": "Clásica",
    "featured": false,
    "description": "Diseño unisex que combina con cualquier reloj o brazalete.",
    "meaning": "Firmeza y equilibrio emocional."
  },
  {
    "id": "AMB-032",
    "file": "images/amb-032.jpg",
    "title": "Pulsera Ámbar y Cuentas de Madera Sagrada",
    "category": "boho",
    "categoryName": "Boho & Étnica",
    "amberType": "Ámbar Chiapaneco",
    "materials": [
      "Cuentas de madera y piedras naturales",
      "Ámbar fósil de Chiapas"
    ],
    "closure": "Ajustable artesanal",
    "badge": "Natural",
    "featured": false,
    "description": "Cálida, liviana y totalmente conectada con la tierra.",
    "meaning": "Conexión ancestral y arraigo."
  },
  {
    "id": "AMB-033",
    "file": "images/amb-033.jpg",
    "title": "Pulsera Violeta Profundo & Gota de Ámbar Puro",
    "category": "cristales",
    "categoryName": "Cristales & Color",
    "amberType": "Ámbar Amarillo Miel en Forma de Gota",
    "materials": [
      "Cristales esféricos violeta amatista",
      "Gema central de ámbar en gota pulida",
      "Rondelles celestes con strass"
    ],
    "closure": "Elástica reforzada premium",
    "badge": "Pieza única",
    "featured": true,
    "description": "Una exquisita gota de ámbar natural pulida con bordes suaves que resalta en el centro de cristales color violeta real.",
    "meaning": "Espiritualidad, transmutación y elegancia."
  },
  {
    "id": "AMB-034",
    "file": "images/amb-034.jpg",
    "title": "Pulsera Barriletes de Ámbar Seleccionado",
    "category": "ambar-puro",
    "categoryName": "Ámbar Puro",
    "amberType": "100% Ámbar Puro de Chiapas",
    "materials": [
      "Múltiples piezas de ámbar natural talladas a mano en forma de barriletes"
    ],
    "closure": "Elástica reforzada premium",
    "badge": "Ámbar puro",
    "featured": true,
    "description": "Conformada exclusivamente por piezas de ámbar chiapaneco auténtico en diversas tonalidades miel, amarillo y cognac.",
    "meaning": "Máxima vibración energética, sanación y vitalidad."
  },
  {
    "id": "AMB-035",
    "file": "images/amb-035.jpg",
    "title": "Pulsera Pepitas de Ámbar Chiapaneco Genuino",
    "category": "ambar-puro",
    "categoryName": "Ámbar Puro",
    "amberType": "100% Ámbar Puro de Simojovel",
    "materials": [
      "Pepitas de ámbar natural pulido de diferentes tamaños"
    ],
    "closure": "Elástica reforzada premium",
    "badge": "Ámbar puro",
    "featured": true,
    "description": "Cada pieza de ámbar es un fragmento de historia vegetal fosilizada de millones de años con inclusiones naturales.",
    "meaning": "Protección milenaria y bienestar corporal."
  },
  {
    "id": "AMB-036",
    "file": "images/amb-036.jpg",
    "title": "Pulsera Mosaico Ámbar y Cristales Celestes",
    "category": "cristales",
    "categoryName": "Cristales & Color",
    "amberType": "Ámbar de Chiapas",
    "materials": [
      "Cristales celestes transparentes",
      "Ámbar natural",
      "Detalles metálicos"
    ],
    "closure": "Elástica reforzada",
    "badge": "Fresco",
    "featured": false,
    "description": "Combinación suave y luminosa para el uso cotidiano.",
    "meaning": "Paz interior y optimismo."
  },
  {
    "id": "AMB-037",
    "file": "images/amb-037.jpg",
    "title": "Pulsera Piedra Volcánica & Ámbar Miel",
    "category": "proteccion",
    "categoryName": "Protección Ónix",
    "amberType": "Ámbar de Simojovel",
    "materials": [
      "Piedra volcánica porosa y ónix",
      "Gema de ámbar chiapaneco"
    ],
    "closure": "Nudo corredizo ajustable",
    "badge": "Energética",
    "featured": false,
    "description": "Compatible con aceites esenciales para aromaterapia y con un centro radiante de ámbar.",
    "meaning": "Fuerza telúrica y purificación."
  },
  {
    "id": "AMB-038",
    "file": "images/amb-038.jpg",
    "title": "Pulsera Ónix Mate & Ámbar Dorado",
    "category": "proteccion",
    "categoryName": "Protección Ónix",
    "amberType": "Ámbar de Chiapas",
    "materials": [
      "Piedras negras mate",
      "Ámbar amarillo dorado"
    ],
    "closure": "Ajustable macramé",
    "badge": "Protección",
    "featured": false,
    "description": "Acabado contemporáneo no reflectante que hace resaltar intensamente el brillo cálido del ámbar.",
    "meaning": "Estabilidad y concentración mental."
  },
  {
    "id": "AMB-039",
    "file": "images/amb-039.jpg",
    "title": "Pulsera Majestad 100% Ámbar de Chiapas Barriletes",
    "category": "ambar-puro",
    "categoryName": "Ámbar Puro",
    "amberType": "100% Ámbar Puro de Chiapas Grado Joyería",
    "materials": [
      "Barriletes tallados y pulidos de ámbar auténtico de Simojovel"
    ],
    "closure": "Elástica reforzada de alta resistencia",
    "badge": "Colección exclusiva",
    "featured": true,
    "description": "Una pieza excepcional para los verdaderos amantes del ámbar. Compuesta íntegramente por barriletes de ámbar transparente y puro con tonalidades que van del amarillo oro al cognac.",
    "meaning": "Calidez, prosperidad, protección ancestral y salud."
  },
  {
    "id": "AMB-040",
    "file": "images/amb-040.jpg",
    "title": "Pulsera Azul Índigo & Ámbar Luminoso",
    "category": "cristales",
    "categoryName": "Cristales & Color",
    "amberType": "Ámbar Miel Chiapaneco",
    "materials": [
      "Cristales azul noche irisado",
      "Ámbar de Chiapas",
      "Separadores dorados"
    ],
    "closure": "Elástica reforzada",
    "badge": "Exclusiva",
    "featured": false,
    "description": "El azul profundo de la noche combinado con la estrella dorada del ámbar.",
    "meaning": "Intuición y sueños lúcidos."
  },
  {
    "id": "AMB-041",
    "file": "images/amb-041.jpg",
    "title": "Pulsera Fósil Ámbar Imperial Graduado 100% Auténtico",
    "category": "ambar-puro",
    "categoryName": "Ámbar Puro",
    "amberType": "100% Ámbar Fósil de Chiapas (Amarillo, Cognac y Cherry)",
    "materials": [
      "Cuentas de ámbar natural graduadas en forma de lenteja y barrilete"
    ],
    "closure": "Elástica reforzada premium",
    "badge": "Ámbar puro",
    "featured": true,
    "description": "Pieza de colección inigualable con diferentes colores de ámbar chiapaneco incluyendo tonalidades cognac y rojizas con inclusiones biológicas fósiles.",
    "meaning": "Amuleto ancestral supremo y conexión milenaria."
  },
  {
    "id": "AMB-042",
    "file": "images/amb-042.jpg",
    "title": "Pulsera Howlite Mármol & Ámbar Imperial Chiapaneco",
    "category": "chakras",
    "categoryName": "7 Chakras",
    "amberType": "Ámbar Amarillo Miel de Chiapas",
    "materials": [
      "Howlite blanco veteado natural",
      "Ámbar auténtico",
      "Separadores artesanales"
    ],
    "closure": "Elástica reforzada premium",
    "badge": "Elegante",
    "featured": false,
    "description": "La pureza del blanco marmoleado complementa la calidez del ámbar chiapaneco en un diseño fino y cómodo.",
    "meaning": "Paz mental, armonía y protección sutil."
  }
];
