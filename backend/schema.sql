
CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO categories (id, name) VALUES
(1, 'CPUs'),
(2, 'GPUs'),
(3, 'Motherboards'),
(4, 'RAM'),
(5, 'Storage'),
(6, 'Power Supplies'),
(7, 'Cases'),
(8, 'Cooling Systems'),
(9, 'Monitors'),
(10, 'Peripherals');

INSERT INTO products (id, name, price, description, category_id) VALUES
(1, 'Intel Core i9-13900K', 599.99, '13th Gen 24-core processor', 1),
(2, 'AMD Ryzen 9 7950X', 549.99, '16-core, 32-thread desktop processor', 1),
(3, 'Intel Core i5-13600K', 319.99, 'Mid-range performance CPU', 1),
(4, 'NVIDIA RTX 4090', 1599.99, 'Top-tier gaming graphics card', 2),
(5, 'AMD Radeon RX 7900 XTX', 999.99, 'High-end 24GB GDDR6 GPU', 2),
(6, 'NVIDIA RTX 4070 Ti', 799.99, 'Next-gen performance for gamers', 2),
(7, 'ASUS ROG Strix Z790-E', 379.99, 'High-end motherboard for Intel CPUs', 3),
(8, 'MSI B650 Tomahawk WiFi', 239.99, 'AMD AM5 motherboard with WiFi', 3),
(9, 'Gigabyte X670 AORUS Elite AX', 269.99, 'ATX motherboard for Ryzen 7000 series', 3),
(10, 'Corsair Vengeance 32GB DDR5', 139.99, 'Dual channel 6000MHz kit', 4),
(11, 'G.SKILL Trident Z5 RGB 32GB', 149.99, 'DDR5 6400MHz, CL32, gaming RAM', 4),
(12, 'Kingston Fury Beast 16GB DDR4', 64.99, '3200MHz low-latency memory', 4),
(13, 'Samsung 980 PRO 1TB NVMe SSD', 129.99, 'High-speed Gen4 M.2 SSD', 5),
(14, 'WD Black SN850X 2TB', 199.99, 'Gaming SSD with heatsink', 5),
(15, 'Crucial MX500 1TB SSD', 89.99, 'SATA SSD for desktops & laptops', 5),
(16, 'Corsair RM850x 850W', 139.99, 'Fully modular 80+ Gold PSU', 6),
(17, 'EVGA SuperNOVA 750 G6', 119.99, '750W 80+ Gold power supply', 6),
(18, 'Seasonic Focus GX-650W', 99.99, 'Reliable 80+ Gold certified PSU', 6),
(19, 'NZXT H510 Elite', 149.99, 'Mid-tower ATX case with RGB and glass panel', 7),
(20, 'Lian Li PC-O11 Dynamic', 139.99, 'Popular dual-chamber glass case', 7),
(21, 'Fractal Design Meshify C', 109.99, 'Compact and airflow-optimized case', 7),
(22, 'Noctua NH-D15', 99.99, 'Dual-tower air cooler with quiet fans', 8),
(23, 'Corsair iCUE H150i Elite Capellix', 169.99, '360mm liquid cooler with RGB', 8),
(24, 'ARCTIC Freezer 34 eSports DUO', 49.99, 'Affordable and efficient air cooler', 8),
(25, 'LG UltraGear 27GP950-B', 799.99, '4K 144Hz Nano IPS gaming monitor', 9),
(26, 'Dell S2721DGF', 449.99, '27\" QHD 165Hz monitor with FreeSync', 9),
(27, 'ASUS TUF Gaming VG27AQ', 379.99, 'QHD 165Hz G-Sync compatible monitor', 9),
(28, 'Logitech G Pro X Keyboard', 129.99, 'Mechanical gaming keyboard with swappable switches', 10),
(29, 'Razer DeathAdder V3 Pro', 149.99, 'Wireless ergonomic gaming mouse', 10),
(30, 'SteelSeries Arctis Nova Pro', 249.99, 'Premium wired headset with DAC', 10);
