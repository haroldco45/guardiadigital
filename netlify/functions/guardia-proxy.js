<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Guardia Digital - Sistema de seguridad comunitaria con histórico">
    <meta name="theme-color" content="#1e3a5f">
    
    <!-- Open Graph -->
    <meta property="og:title" content="🛡️ Guardia Digital - Seguridad del Barrio">
    <meta property="og:description" content="Sistema de vigilancia comunitaria. Reporta incidentes y mantén tu barrio seguro.">
    <meta property="og:image" content="https://guardiadalcolina.netlify.app/og-image.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="https://guardiadalcolina.netlify.app/">
    <meta property="og:type" content="website">
    
    <!-- PWA -->
    <link rel="manifest" href="data:application/json,{\"name\":\"Guardia Digital\",\"short_name\":\"Guardia\",\"start_url\":\"/\",\"display\":\"standalone\"}">
    <meta name="apple-mobile-web-app-capable" content="yes">
    
    <title>🛡️ Guardia Digital - Seguridad Comunitaria</title>
    
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        :root {
            --azul-oscuro: #1e3a5f;
            --azul-medio: #2d5a8c;
            --rojo-alerta: #e74c3c;
            --naranja-aviso: #f39c12;
            --verde-seguro: #27ae60;
            --gris-claro: #ecf0f1;
            --blanco: #ffffff;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 10px;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: var(--blanco);
            border-radius: 15px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            height: 100vh;
            max-height: 100vh;
        }
        
        .header {
            background: linear-gradient(135deg, var(--azul-oscuro) 0%, var(--azul-medio) 100%);
            color: var(--blanco);
            padding: 15px 20px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        
        .header h1 {
            font-size: 24px;
            margin-bottom: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
        
        .status {
            font-size: 12px;
            padding: 5px 10px;
            background: rgba(255,255,255,0.2);
            border-radius: 20px;
            display: inline-block;
            margin-top: 5px;
        }
        
        .status.online::before { content: '🟢'; margin-right: 5px; }
        .status.offline::before { content: '💾'; margin-right: 5px; }
        
        .tabs {
            display: flex;
            gap: 5px;
            padding: 10px;
            background: var(--gris-claro);
            overflow-x: auto;
            border-bottom: 1px solid #ddd;
        }
        
        .tab-btn {
            padding: 10px 15px;
            border: none;
            background: white;
            cursor: pointer;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            white-space: nowrap;
            transition: all 0.3s;
            border: 2px solid transparent;
        }
        
        .tab-btn.active {
            background: var(--azul-oscuro);
            color: white;
            border-color: var(--azul-oscuro);
        }
        
        .content {
            flex: 1;
            overflow-y: auto;
            padding: 15px;
        }
        
        .tab-content { display: none; }
        .tab-content.active { display: block; }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        label {
            display: block;
            font-weight: 600;
            margin-bottom: 5px;
            color: var(--azul-oscuro);
            font-size: 14px;
        }
        
        input, textarea, select {
            width: 100%;
            padding: 10px;
            border: 2px solid var(--gris-claro);
            border-radius: 8px;
            font-size: 14px;
            font-family: inherit;
        }
        
        input:focus, textarea:focus, select:focus {
            outline: none;
            border-color: var(--azul-medio);
            box-shadow: 0 0 0 3px rgba(45, 90, 140, 0.1);
        }
        
        textarea {
            resize: vertical;
            min-height: 80px;
        }
        
        button {
            background: linear-gradient(135deg, var(--azul-oscuro) 0%, var(--azul-medio) 100%);
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.3s;
            width: 100%;
            margin-bottom: 10px;
        }
        
        button:active { transform: scale(0.98); }
        
        button.secondary {
            background: var(--naranja-aviso);
        }
        
        button.success {
            background: var(--verde-seguro);
        }
        
        .incident-card {
            background: var(--gris-claro);
            padding: 12px;
            margin-bottom: 10px;
            border-radius: 8px;
            border-left: 4px solid var(--azul-medio);
        }
        
        .message {
            padding: 10px 15px;
            border-radius: 8px;
            text-align: center;
            font-weight: 600;
            margin-bottom: 15px;
        }
        
        .message.success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        
        .message.error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        
        .footer {
            background: var(--gris-claro);
            padding: 10px;
            text-align: center;
            font-size: 12px;
            color: #666;
            border-top: 1px solid #ddd;
        }
        
        .backup-info {
            background: #e3f2fd;
            padding: 10px;
            border-radius: 8px;
            font-size: 13px;
            margin-bottom: 15px;
            border-left: 4px solid #2196F3;
        }
        
        .file-input {
            display: none;
        }
        
        input[type="file"] {
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🛡️ Guardia Digital</h1>
            <p style="font-size: 14px; margin: 0;">Seguridad Comunitaria en Tiempo Real</p>
            <div id="statusBadge" class="status offline">💾 Datos Locales</div>
        </div>
        
        <div class="tabs">
            <button class="tab-btn active" onclick="switchTab('dashboard')">📊 Dashboard</button>
            <button class="tab-btn" onclick="switchTab('reportar')">📝 Reportar</button>
            <button class="tab-btn" onclick="switchTab('incidentes')">📋 Histórico</button>
            <button class="tab-btn" onclick="switchTab('backup')">💾 Backup</button>
        </div>
        
        <div class="content">
            <!-- Dashboard -->
            <div id="dashboard" class="tab-content active">
                <h2 style="color: var(--azul-oscuro); margin-bottom: 15px;">📊 Resumen del Barrio</h2>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px;">
                    <div style="background: linear-gradient(135deg, var(--rojo-alerta), #c0392b); color: white; padding: 15px; border-radius: 8px; text-align: center;">
                        <div style="font-size: 28px; font-weight: bold;" id="totalIncidentes">0</div>
                        <small>Incidentes Totales</small>
                    </div>
                    <div style="background: linear-gradient(135deg, var(--naranja-aviso), #d68910); color: white; padding: 15px; border-radius: 8px; text-align: center;">
                        <div style="font-size: 28px; font-weight: bold;" id="totalSospechosos">0</div>
                        <small>Sospechosos</small>
                    </div>
                </div>
                
                <div id="dashboardContent"></div>
            </div>
            
            <!-- Reportar -->
            <div id="reportar" class="tab-content">
                <h2 style="color: var(--azul-oscuro); margin-bottom: 15px;">📝 Reportar Incidente</h2>
                
                <div id="reportarMessage"></div>
                
                <form onsubmit="reportarIncidente(event)">
                    <div class="form-group">
                        <label>Tipo de Incidente *</label>
                        <select id="tipo" required>
                            <option value="">-- Selecciona --</option>
                            <option value="robo">🚗 Robo de vehículo</option>
                            <option value="robo_residencia">🏠 Robo a residencia</option>
                            <option value="robo_comercio">🏪 Robo a comercio</option>
                            <option value="sospechoso">👤 Sospechoso rondando</option>
                            <option value="asalto">⚠️ Asalto</option>
                            <option value="accidente">🚗 Accidente</option>
                            <option value="otro">❓ Otro</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Descripción *</label>
                        <textarea id="descripcion" placeholder="Describe lo que viste..." required></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>Ubicación (Calle/Sector) *</label>
                        <input type="text" id="ubicacion" placeholder="Calle o sector..." required>
                    </div>
                    
                    <div class="form-group">
                        <label>Zona/Barrio</label>
                        <input type="text" id="zona" placeholder="Ej: Centro, Barrio Norte...">
                    </div>
                    
                    <div class="form-group">
                        <label>Tu Nombre/Teléfono (opcional)</label>
                        <input type="text" id="reportado_por" placeholder="Anónimo">
                    </div>
                    
                    <button type="submit">📤 Enviar Reporte</button>
                </form>
                
                <div style="background: var(--gris-claro); padding: 15px; border-radius: 8px; margin-top: 20px; text-align: center; border-left: 4px solid var(--verde-seguro);">
                    <p style="font-size: 13px; color: #666; margin: 0;">
                        <strong>¡Juntos hacemos nuestro barrio más seguro!</strong><br>
                        Los datos se guardan localmente en tu navegador
                    </p>
                </div>
            </div>
            
            <!-- Histórico -->
            <div id="incidentes" class="tab-content">
                <h2 style="color: var(--azul-oscuro); margin-bottom: 15px;">📋 Histórico de Reportes</h2>
                <button onclick="cargarIncidentes()" style="margin-bottom: 15px;">🔄 Actualizar</button>
                <div id="incidentesContainer"></div>
            </div>
            
            <!-- Backup -->
            <div id="backup" class="tab-content">
                <h2 style="color: var(--azul-oscuro); margin-bottom: 15px;">💾 Backup & Restaurar</h2>
                
                <div class="backup-info">
                    📌 <strong>Backup Local:</strong> Guarda todos tus reportes en un archivo JSON que puedes compartir por WhatsApp o guardar en tu PC.
                </div>
                
                <button class="success" onclick="descargarBackup()">📥 Descargar Backup (JSON)</button>
                
                <button class="secondary" onclick="document.getElementById('archivoBackup').click()">📤 Subir Backup (Restaurar)</button>
                <input type="file" id="archivoBackup" class="file-input" accept=".json" onchange="restaurarBackup(event)">
                
                <button class="secondary" onclick="compartirWhatsApp()" style="background: #25D366;">💬 Compartir por WhatsApp</button>
                
                <div id="backupMessage" style="margin-top: 15px;"></div>
                
                <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin-top: 15px; border-left: 4px solid var(--naranja-aviso);">
                    <p style="font-size: 13px; color: #666; margin: 0;">
                        <strong>💡 Cómo funciona:</strong><br>
                        1. Haz click en "Descargar Backup" para obtener un archivo JSON<br>
                        2. Comparte el archivo por WhatsApp<br>
                        3. Otra persona puede subir el archivo aquí para ver el histórico<br>
                        4. Los datos se guardan solo en tu navegador
                    </p>
                </div>
            </div>
        </div>
        
        <div class="footer">
            Desarrollada por Vibras Positivas HM — Derechos de Autor Reservados
        </div>
    </div>
    
    <script>
        // ========================================
        // ALMACENAMIENTO LOCAL (localStorage)
        // ========================================
        
        const DB_KEY = 'guardia_digital_reports';
        const BACKUP_VERSION = '1.0';
        
        function guardarEnLocal(incidente) {
            let reportes = JSON.parse(localStorage.getItem(DB_KEY) || '[]');
            reportes.push(incidente);
            localStorage.setItem(DB_KEY, JSON.stringify(reportes));
            console.log(`[Guardia] ✅ Reporte guardado localmente: ${incidente.uuid}`);
        }
        
        function cargarDelLocal() {
            return JSON.parse(localStorage.getItem(DB_KEY) || '[]');
        }
        
        function contarIncidentes() {
            const reportes = cargarDelLocal();
            return {
                totalIncidentes: reportes.length,
                totalSospechosos: reportes.filter(r => r.tipo === 'sospechoso').length
            };
        }
        
        // ========================================
        // INTERFAZ
        // ========================================
        
        function switchTab(tabName) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
            document.getElementById(tabName).classList.add('active');
            event.target.classList.add('active');
            
            if (tabName === 'incidentes') cargarIncidentes();
        }
        
        function actualizarDashboard() {
            const { totalIncidentes, totalSospechosos } = contarIncidentes();
            document.getElementById('totalIncidentes').textContent = totalIncidentes;
            document.getElementById('totalSospechosos').textContent = totalSospechosos;
            
            const reportes = cargarDelLocal();
            let html = '<h3 style="color: var(--azul-oscuro); margin-bottom: 10px;">Últimos Reportes</h3>';
            
            if (reportes.length > 0) {
                reportes.slice(-5).reverse().forEach(inc => {
                    html += `
                        <div class="incident-card">
                            <strong>${inc.tipo.toUpperCase()}</strong>
                            <div>${inc.descripcion}</div>
                            <small>📍 ${inc.ubicacion} | 📅 ${inc.fecha} ${inc.hora}</small>
                        </div>
                    `;
                });
            } else {
                html += '<p style="text-align: center; color: #999; padding: 20px;">Sin reportes aún</p>';
            }
            
            document.getElementById('dashboardContent').innerHTML = html;
        }
        
        function reportarIncidente(e) {
            e.preventDefault();
            
            const incidente = {
                uuid: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
                    const r = Math.random() * 16 | 0;
                    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
                }),
                tipo: document.getElementById('tipo').value,
                descripcion: document.getElementById('descripcion').value,
                ubicacion: document.getElementById('ubicacion').value,
                zona: document.getElementById('zona').value,
                reportado_por: document.getElementById('reportado_por').value || 'Anónimo',
                fecha: new Date().toISOString().split('T')[0],
                hora: new Date().toTimeString().slice(0, 8)
            };
            
            const messageDiv = document.getElementById('reportarMessage');
            
            try {
                guardarEnLocal(incidente);
                messageDiv.innerHTML = '<div class="message success">✅ Reporte guardado exitosamente</div>';
                document.querySelector('form').reset();
                actualizarDashboard();
                setTimeout(() => messageDiv.innerHTML = '', 3000);
            } catch (err) {
                messageDiv.innerHTML = '<div class="message error">❌ Error al guardar</div>';
                setTimeout(() => messageDiv.innerHTML = '', 3000);
            }
        }
        
        function cargarIncidentes() {
            const container = document.getElementById('incidentesContainer');
            const reportes = cargarDelLocal();
            
            if (reportes.length > 0) {
                let html = '';
                reportes.slice().reverse().forEach(inc => {
                    html += `
                        <div class="incident-card">
                            <strong>${inc.tipo.toUpperCase()}</strong>
                            <div>${inc.descripcion}</div>
                            <small>📍 ${inc.ubicacion} | 📅 ${inc.fecha} ${inc.hora}</small>
                            ${inc.reportado_por ? `<small>👤 ${inc.reportado_por}</small>` : ''}
                        </div>
                    `;
                });
                container.innerHTML = html;
            } else {
                container.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">Sin reportes aún</p>';
            }
        }
        
        // ========================================
        // BACKUP & RESTORE
        // ========================================
        
        function descargarBackup() {
            const reportes = cargarDelLocal();
            const backup = {
                version: BACKUP_VERSION,
                fecha_backup: new Date().toISOString(),
                total_reportes: reportes.length,
                datos: reportes
            };
            
            const json = JSON.stringify(backup, null, 2);
            const blob = new Blob([json], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `guardia-backup-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            const msg = document.getElementById('backupMessage');
            msg.innerHTML = '<div class="message success">✅ Backup descargado correctamente</div>';
            setTimeout(() => msg.innerHTML = '', 3000);
        }
        
        function restaurarBackup(event) {
            const file = event.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const backup = JSON.parse(e.target.result);
                    
                    if (!backup.datos || !Array.isArray(backup.datos)) {
                        throw new Error('Formato de backup inválido');
                    }
                    
                    localStorage.setItem(DB_KEY, JSON.stringify(backup.datos));
                    
                    const msg = document.getElementById('backupMessage');
                    msg.innerHTML = `<div class="message success">✅ ${backup.datos.length} reportes restaurados correctamente</div>`;
                    setTimeout(() => msg.innerHTML = '', 3000);
                    
                    actualizarDashboard();
                    cargarIncidentes();
                } catch (err) {
                    const msg = document.getElementById('backupMessage');
                    msg.innerHTML = `<div class="message error">❌ Error: ${err.message}</div>`;
                    setTimeout(() => msg.innerHTML = '', 3000);
                }
            };
            reader.readAsText(file);
            
            // Reset input
            event.target.value = '';
        }
        
        function compartirWhatsApp() {
            const reportes = cargarDelLocal();
            const texto = `📊 *Guardia Digital - Reporte de Seguridad*\n\n` +
                `Total de reportes: ${reportes.length}\n` +
                `Fecha: ${new Date().toLocaleDateString('es-CO')}\n\n` +
                `🔗 Descarga el backup completo y restaura los datos en: https://guardiadigitalcolina.netlify.app\n\n` +
                `Desarrollada por Vibras Positivas HM`;
            
            const url = `https://wa.me/?text=${encodeURIComponent(texto)}`;
            window.open(url, '_blank');
        }
        
        // ========================================
        // INICIALIZAR
        // ========================================
        
        window.addEventListener('load', () => {
            console.log('[Guardia] 🚀 Iniciando app con almacenamiento local');
            document.getElementById('statusBadge').innerHTML = '💾 Datos Locales';
            actualizarDashboard();
        });
    </script>
</body>
</html>
