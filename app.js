/**
 * ImagePro - Professional Image Editor
 * Complete JavaScript Implementation
 */

// ========================================
// Internationalization
// ========================================
const i18n = {
    en: {
        appName: 'ImagePro',
        upload: '📤 Upload',
        uploadImages: 'Upload Images',
        batchProcess: 'Batch Process',
        edit: '✏️ Edit',
        adjustments: 'Adjustments',
        filters: 'Filters',
        transform: 'Transform',
        compress: 'Compress',
        export: '💾 Export',
        download: 'Download',
        editorTitle: 'Image Editor',
        reset: 'Reset',
        dropTitle: 'Drop your images here',
        dropSubtitle: 'or click to browse',
        supportedFormats: 'Supports: JPG, PNG, WebP, GIF, HEIC, TIFF (Max 50MB)',
        recentFiles: 'Recent Files',
        batchTitle: 'Batch Processing',
        addFiles: 'Add Files',
        clearAll: 'Clear All',
        batchFormat: 'Output Format',
        batchQuality: 'Quality',
        batchResize: 'Resize',
        maintainRatio: 'Keep ratio',
        processAll: 'Process All',
        noBatchFiles: 'No files added yet',
        brightness: 'Brightness',
        contrast: 'Contrast',
        saturation: 'Saturation',
        hue: 'Hue Rotate',
        blur: 'Blur',
        opacity: 'Opacity',
        resetAdjustments: 'Reset All',
        apply: 'Apply',
        popularFilters: 'Popular Filters',
        artisticFilters: 'Artistic',
        original: 'Original',
        grayscale: 'Grayscale',
        sepia: 'Sepia',
        vintage: 'Vintage',
        warm: 'Warm',
        cool: 'Cool',
        dramatic: 'Dramatic',
        vivid: 'Vivid',
        invert: 'Invert',
        duotone: 'Duotone',
        noir: 'Noir',
        cyber: 'Cyber',
        rotate: 'Rotate',
        crop: 'Crop',
        resize: 'Resize',
        flipH: 'Flip H',
        flipV: 'Flip V',
        customRotate: 'Custom Rotate',
        free: 'Free',
        width: 'Width',
        height: 'Height',
        applyCrop: 'Apply Crop',
        newWidth: 'New Width',
        newHeight: 'New Height',
        maintainAspect: 'Maintain aspect ratio',
        applyResize: 'Apply Resize',
        compressed: 'Compressed',
        quality: 'Quality',
        low: 'Low',
        medium: 'Medium',
        high: 'High',
        best: 'Best',
        outputFormat: 'Output Format',
        compressImage: 'Compress Image',
        preview: 'Preview',
        filename: 'Filename',
        exportFormat: 'Format',
        exportQuality: 'Quality',
        dimensions: 'Dimensions',
        estimatedSize: 'Estimated Size',
        downloadImage: 'Download Image',
        compare: 'Compare',
        fit: 'Fit',
        before: 'Before',
        after: 'After',
        processing: 'Processing...',
        fileSize: 'File size',
        format: 'Format',
        success: 'Success!',
        error: 'Error occurred',
        selectImage: 'Please select an image first',
        batchComplete: 'Batch processing complete!'
    },
    zh: {
        appName: 'ImagePro',
        upload: '📤 上传',
        uploadImages: '上传图片',
        batchProcess: '批量处理',
        edit: '✏️ 编辑',
        adjustments: '调整',
        filters: '滤镜',
        transform: '变换',
        compress: '压缩',
        export: '💾 导出',
        download: '下载',
        editorTitle: '图片编辑器',
        reset: '重置',
        dropTitle: '拖放图片到这里',
        dropSubtitle: '或点击浏览',
        supportedFormats: '支持: JPG, PNG, WebP, GIF, HEIC, TIFF (最大 50MB)',
        recentFiles: '最近文件',
        batchTitle: '批量处理',
        addFiles: '添加文件',
        clearAll: '清空全部',
        batchFormat: '输出格式',
        batchQuality: '质量',
        batchResize: '调整大小',
        maintainRatio: '保持比例',
        processAll: '处理全部',
        noBatchFiles: '尚未添加文件',
        brightness: '亮度',
        contrast: '对比度',
        saturation: '饱和度',
        hue: '色相旋转',
        blur: '模糊',
        opacity: '不透明度',
        resetAdjustments: '重置全部',
        apply: '应用',
        popularFilters: '热门滤镜',
        artisticFilters: '艺术效果',
        original: '原图',
        grayscale: '灰度',
        sepia: ' sepia',
        vintage: '复古',
        warm: '暖色',
        cool: '冷色',
        dramatic: '戏剧',
        vivid: '鲜艳',
        invert: '反色',
        duotone: '双色调',
        noir: '黑白电影',
        cyber: '赛博朋克',
        rotate: '旋转',
        crop: '裁剪',
        resize: '调整大小',
        flipH: '水平翻转',
        flipV: '垂直翻转',
        customRotate: '自定义旋转',
        free: '自由',
        width: '宽度',
        height: '高度',
        applyCrop: '应用裁剪',
        newWidth: '新宽度',
        newHeight: '新高度',
        maintainAspect: '保持宽高比',
        applyResize: '应用调整',
        compressed: '已压缩',
        quality: '质量',
        low: '低',
        medium: '中',
        high: '高',
        best: '最佳',
        outputFormat: '输出格式',
        compressImage: '压缩图片',
        preview: '预览',
        filename: '文件名',
        exportFormat: '格式',
        exportQuality: '质量',
        dimensions: '尺寸',
        estimatedSize: '预估大小',
        downloadImage: '下载图片',
        compare: '对比',
        fit: '适应',
        before: '之前',
        after: '之后',
        processing: '处理中...',
        fileSize: '文件大小',
        format: '格式',
        success: '成功!',
        error: '发生错误',
        selectImage: '请先选择图片',
        batchComplete: '批量处理完成!'
    },
    es: {
        appName: 'ImagePro',
        upload: '📤 Subir',
        uploadImages: 'Subir Imágenes',
        batchProcess: 'Procesar por Lotes',
        edit: '✏️ Editar',
        adjustments: 'Ajustes',
        filters: 'Filtros',
        transform: 'Transformar',
        compress: 'Comprimir',
        export: '💾 Exportar',
        download: 'Descargar',
        editorTitle: 'Editor de Imágenes',
        reset: 'Reiniciar',
        dropTitle: 'Arrastra tus imágenes aquí',
        dropSubtitle: 'o haz clic para explorar',
        supportedFormats: 'Soporta: JPG, PNG, WebP, GIF, HEIC, TIFF (Max 50MB)',
        recentFiles: 'Archivos Recientes',
        batchTitle: 'Procesamiento por Lotes',
        addFiles: 'Agregar Archivos',
        clearAll: 'Limpiar Todo',
        batchFormat: 'Formato de Salida',
        batchQuality: 'Calidad',
        batchResize: 'Redimensionar',
        maintainRatio: 'Mantener proporción',
        processAll: 'Procesar Todo',
        noBatchFiles: 'No hay archivos aún',
        brightness: 'Brillo',
        contrast: 'Contraste',
        saturation: 'Saturación',
        hue: 'Tono',
        blur: 'Desenfoque',
        opacity: 'Opacidad',
        resetAdjustments: 'Reiniciar Todo',
        apply: 'Aplicar',
        popularFilters: 'Filtros Populares',
        artisticFilters: 'Artísticos',
        original: 'Original',
        grayscale: 'Escala de Grises',
        sepia: 'Sepia',
        vintage: 'Vintage',
        warm: 'Cálido',
        cool: 'Frío',
        dramatic: 'Dramático',
        vivid: 'Vívido',
        invert: 'Invertir',
        duotone: 'Bicolor',
        noir: 'Noir',
        cyber: 'Cyber',
        rotate: 'Rotar',
        crop: 'Recortar',
        resize: 'Redimensionar',
        flipH: 'Voltear H',
        flipV: 'Voltear V',
        customRotate: 'Rotación Personalizada',
        free: 'Libre',
        width: 'Ancho',
        height: 'Alto',
        applyCrop: 'Aplicar Recorte',
        newWidth: 'Nuevo Ancho',
        newHeight: 'Nuevo Alto',
        maintainAspect: 'Mantener proporción',
        applyResize: 'Aplicar Redimensión',
        compressed: 'Comprimido',
        quality: 'Calidad',
        low: 'Baja',
        medium: 'Media',
        high: 'Alta',
        best: 'Mejor',
        outputFormat: 'Formato de Salida',
        compressImage: 'Comprimir Imagen',
        preview: 'Vista Previa',
        filename: 'Nombre de Archivo',
        exportFormat: 'Formato',
        exportQuality: 'Calidad',
        dimensions: 'Dimensiones',
        estimatedSize: 'Tamaño Estimado',
        downloadImage: 'Descargar Imagen',
        compare: 'Comparar',
        fit: 'Ajustar',
        before: 'Antes',
        after: 'Después',
        processing: 'Procesando...',
        fileSize: 'Tamaño',
        format: 'Formato',
        success: '¡Éxito!',
        error: 'Error ocurrido',
        selectImage: 'Por favor selecciona una imagen primero',
        batchComplete: '¡Procesamiento completado!'
    },
    ja: {
        appName: 'ImagePro',
        upload: '📤 アップロード',
        uploadImages: '画像をアップロード',
        batchProcess: '一括処理',
        edit: '✏️ 編集',
        adjustments: '調整',
        filters: 'フィルター',
        transform: '変換',
        compress: '圧縮',
        export: '💾 エクスポート',
        download: 'ダウンロード',
        editorTitle: '画像エディター',
        reset: 'リセット',
        dropTitle: '画像をここにドロップ',
        dropSubtitle: 'またはクリックして参照',
        supportedFormats: '対応: JPG, PNG, WebP, GIF, HEIC, TIFF (最大50MB)',
        recentFiles: '最近のファイル',
        batchTitle: '一括処理',
        addFiles: 'ファイルを追加',
        clearAll: 'すべてクリア',
        batchFormat: '出力形式',
        batchQuality: '品質',
        batchResize: 'リサイズ',
        maintainRatio: '比率を維持',
        processAll: 'すべて処理',
        noBatchFiles: 'ファイルが追加されていません',
        brightness: '明るさ',
        contrast: 'コントラスト',
        saturation: '彩度',
        hue: '色相回転',
        blur: 'ぼかし',
        opacity: '不透明度',
        resetAdjustments: 'すべてリセット',
        apply: '適用',
        popularFilters: '人気のフィルター',
        artisticFilters: 'アート',
        original: 'オリジナル',
        grayscale: 'グレースケール',
        sepia: 'セピア',
        vintage: 'ビンテージ',
        warm: '暖かい',
        cool: '涼しい',
        dramatic: '劇的',
        vivid: '鮮やか',
        invert: '反転',
        duotone: 'デュオトーン',
        noir: 'ノワール',
        cyber: 'サイバー',
        rotate: '回転',
        crop: '切り抜き',
        resize: 'リサイズ',
        flipH: '水平反転',
        flipV: '垂直反転',
        customRotate: 'カスタム回転',
        free: '自由',
        width: '幅',
        height: '高さ',
        applyCrop: '切り抜き適用',
        newWidth: '新しい幅',
        newHeight: '新しい高さ',
        maintainAspect: '縦横比を維持',
        applyResize: 'リサイズ適用',
        compressed: '圧縮済み',
        quality: '品質',
        low: '低',
        medium: '中',
        high: '高',
        best: '最高',
        outputFormat: '出力形式',
        compressImage: '画像を圧縮',
        preview: 'プレビュー',
        filename: 'ファイル名',
        exportFormat: '形式',
        exportQuality: '品質',
        dimensions: 'サイズ',
        estimatedSize: '推定サイズ',
        downloadImage: '画像をダウンロード',
        compare: '比較',
        fit: 'フィット',
        before: 'Before',
        after: 'After',
        processing: '処理中...',
        fileSize: 'ファイルサイズ',
        format: '形式',
        success: '成功!',
        error: 'エラーが発生しました',
        selectImage: '最初に画像を選択してください',
        batchComplete: '一括処理が完了しました!'
    },
    ko: {
        appName: 'ImagePro',
        upload: '📤 업로드',
        uploadImages: '이미지 업로드',
        batchProcess: '일괄 처리',
        edit: '✏️ 편집',
        adjustments: '조정',
        filters: '필터',
        transform: '변환',
        compress: '압축',
        export: '💾 내 복',
        download: '다운로드',
        editorTitle: '이미지 편집기',
        reset: '초기화',
        dropTitle: '이미지를 여기에 드롭하세요',
        dropSubtitle: '또는 클릭하여 찾아보기',
        supportedFormats: '지원: JPG, PNG, WebP, GIF, HEIC, TIFF (최대 50MB)',
        recentFiles: '최근 파일',
        batchTitle: '일괄 처리',
        addFiles: '파일 추가',
        clearAll: '모두 지우기',
        batchFormat: '출력 형식',
        batchQuality: '품질',
        batchResize: '크기 조정',
        maintainRatio: '비율 유지',
        processAll: '모두 처리',
        noBatchFiles: '추가된 파일이 없습니다',
        brightness: '밝기',
        contrast: '대비',
        saturation: '채도',
        hue: '색상 회전',
        blur: '흐림',
        opacity: '불투명도',
        resetAdjustments: '모두 초기화',
        apply: '적용',
        popularFilters: '인기 필터',
        artisticFilters: '예술적',
        original: '원본',
        grayscale: '그레이스케일',
        sepia: '세피아',
        vintage: '빈티지',
        warm: '따뜻한',
        cool: '시원한',
        dramatic: '극적',
        vivid: '선명한',
        invert: '반전',
        duotone: '듀오톤',
        noir: '누아르',
        cyber: '사이버',
        rotate: '회전',
        crop: '자르기',
        resize: '크기 조정',
        flipH: '수평 뒤집기',
        flipV: '수직 뒤집기',
        customRotate: '사용자 정의 회전',
        free: '자유',
        width: '너비',
        height: '높이',
        applyCrop: '자르기 적용',
        newWidth: '새 너비',
        newHeight: '새 높이',
        maintainAspect: '가로세로 비율 유지',
        applyResize: '크기 조정 적용',
        compressed: '압축됨',
        quality: '품질',
        low: '낮음',
        medium: '보통',
        high: '높음',
        best: '최고',
        outputFormat: '출력 형식',
        compressImage: '이미지 압축',
        preview: '미리보기',
        filename: '파일명',
        exportFormat: '형식',
        exportQuality: '품질',
        dimensions: '크기',
        estimatedSize: '예상 크기',
        downloadImage: '이미지 다운로드',
        compare: '비교',
        fit: '맞춤',
        before: '전',
        after: '후',
        processing: '처리 중...',
        fileSize: '파일 크기',
        format: '형식',
        success: '성공!',
        error: '오류 발생',
        selectImage: '먼저 이미지를 선택하세요',
        batchComplete: '일괄 처리 완료!'
    }
};

let currentLang = localStorage.getItem('imagepro-lang') || 'en';
let currentFile = null;
let originalImage = null;
let editedImage = null;
let currentZoom = 1;
let batchFiles = [];
let currentFilter = 'none';
let isComparing = false;

// Image state for adjustments
let imageState = {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hue: 0,
    blur: 0,
    opacity: 100,
    rotate: 0,
    flipH: 1,
    flipV: 1
};

// Crop state
let cropState = {
    active: false,
    ratio: 'free',
    x: 0,
    y: 0,
    width: 0,
    height: 0
};

// ========================================
// Initialization
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    setLang(currentLang);
    setupEventListeners();
    setupDragAndDrop();
    setupSliders();
    setupFilters();
    setupCropPresets();
    setupCompareSlider();
});

function setupEventListeners() {
    // File input
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
        fileInput.addEventListener('change', handleFileSelect);
    }

    // Upload zone click
    const dropZone = document.getElementById('dropZone');
    if (dropZone) {
        dropZone.addEventListener('click', (e) => {
            if (e.target === dropZone || e.target.closest('.upload-content')) {
                fileInput.click();
            }
        });
    }

    // Window click for dropdowns
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.lang-selector')) {
            document.getElementById('langDropdown').classList.remove('show');
        }
    });

    // Batch quality slider
    const batchQuality = document.getElementById('batchQuality');
    if (batchQuality) {
        batchQuality.addEventListener('input', (e) => {
            e.target.nextElementSibling.textContent = e.target.value + '%';
        });
    }

    // Export quality slider
    const exportQuality = document.getElementById('exportQuality');
    if (exportQuality) {
        exportQuality.addEventListener('input', (e) => {
            e.target.nextElementSibling.textContent = e.target.value + '%';
            updateExportPreview();
        });
    }

    // Compress quality slider
    const qualitySlider = document.getElementById('qualitySlider');
    if (qualitySlider) {
        qualitySlider.addEventListener('input', (e) => {
            document.getElementById('qualityValue').textContent = e.target.value + '%';
            updateCompressPreview();
        });
    }

    // Compress format change
    const compressFormat = document.getElementById('compressFormat');
    if (compressFormat) {
        compressFormat.addEventListener('change', updateCompressPreview);
    }

    // Export format change
    const exportFormat = document.getElementById('exportFormat');
    if (exportFormat) {
        exportFormat.addEventListener('change', updateExportPreview);
    }

    // Rotate slider
    const rotateSlider = document.getElementById('rotateSlider');
    if (rotateSlider) {
        rotateSlider.addEventListener('input', (e) => {
            document.getElementById('rotateValue').textContent = e.target.value + '°';
            imageState.rotate = parseInt(e.target.value);
            updateCanvas();
        });
    }

    // Resize inputs
    const resizeWidth = document.getElementById('resizeWidth');
    const resizeHeight = document.getElementById('resizeHeight');
    
    if (resizeWidth && resizeHeight) {
        resizeWidth.addEventListener('input', () => {
            if (document.getElementById('maintainAspect').checked && originalImage) {
                const ratio = originalImage.height / originalImage.width;
                resizeHeight.value = Math.round(resizeWidth.value * ratio);
            }
        });
        
        resizeHeight.addEventListener('input', () => {
            if (document.getElementById('maintainAspect').checked && originalImage) {
                const ratio = originalImage.width / originalImage.height;
                resizeWidth.value = Math.round(resizeHeight.value * ratio);
            }
        });
    }

    // Crop inputs
    const cropWidth = document.getElementById('cropWidth');
    const cropHeight = document.getElementById('cropHeight');
    
    if (cropWidth && cropHeight) {
        cropWidth.addEventListener('input', updateCropDimensions);
        cropHeight.addEventListener('input', updateCropDimensions);
    }
}

function setupDragAndDrop() {
    const dropZone = document.getElementById('dropZone');
    if (!dropZone) return;

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => {
            dropZone.classList.add('dragover');
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => {
            dropZone.classList.remove('dragover');
        });
    });

    dropZone.addEventListener('drop', handleDrop);
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    
    if (files.length > 0) {
        if (document.querySelector('.nav-item[data-tab="batch"]').classList.contains('active')) {
            addBatchFiles(files);
        } else {
            handleFiles(files[0]);
        }
    }
}

function setupSliders() {
    const sliders = [
        { id: 'brightness', valueId: 'brightnessValue', suffix: '%', state: 'brightness' },
        { id: 'contrast', valueId: 'contrastValue', suffix: '%', state: 'contrast' },
        { id: 'saturation', valueId: 'saturationValue', suffix: '%', state: 'saturation' },
        { id: 'hue', valueId: 'hueValue', suffix: '°', state: 'hue' },
        { id: 'blur', valueId: 'blurValue', suffix: 'px', state: 'blur' },
        { id: 'opacity', valueId: 'opacityValue', suffix: '%', state: 'opacity' }
    ];

    sliders.forEach(({ id, valueId, suffix, state }) => {
        const slider = document.getElementById(id);
        if (slider) {
            slider.addEventListener('input', (e) => {
                const value = e.target.value;
                document.getElementById(valueId).textContent = value + suffix;
                imageState[state] = parseInt(value);
                updateCanvas();
            });
        }
    });
}

function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            updateCanvas();
        });
    });
}

function setupCropPresets() {
    const presets = document.querySelectorAll('.crop-preset');
    presets.forEach(preset => {
        preset.addEventListener('click', () => {
            presets.forEach(p => p.classList.remove('active'));
            preset.classList.add('active');
            cropState.ratio = preset.dataset.ratio;
            updateCropInputs();
        });
    });
}

function setupCompareSlider() {
    const container = document.getElementById('compareContainer');
    const slider = document.getElementById('compareSlider');
    
    if (!container || !slider) return;

    let isDragging = false;

    slider.addEventListener('mousedown', () => isDragging = true);
    document.addEventListener('mouseup', () => isDragging = false);
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging || !isComparing) return;
        
        const rect = container.getBoundingClientRect();
        let x = e.clientX - rect.left;
        x = Math.max(0, Math.min(x, rect.width));
        
        const percentage = (x / rect.width) * 100;
        slider.style.left = percentage + '%';
        
        const edited = document.querySelector('.edited-wrapper');
        if (edited) {
            edited.style.clipPath = `inset(0 0 0 ${percentage}%)`;
        }
    });
}

// ========================================
// Language Functions
// ========================================
function toggleLang() {
    document.getElementById('langDropdown').classList.toggle('show');
}

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('imagepro-lang', lang);
    
    const flags = { en: '🇺🇸', zh: '🇨🇳', es: '🇪🇸', ja: '🇯🇵', ko: '🇰🇷' };
    const names = { en: 'English', zh: '中文', es: 'Español', ja: '日本語', ko: '한국어' };
    
    document.getElementById('current-flag').textContent = flags[lang];
    document.getElementById('current-lang').textContent = names[lang];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) {
            el.textContent = i18n[lang][key];
        }
    });
    
    document.getElementById('langDropdown').classList.remove('show');
}

// ========================================
// Sidebar Functions
// ========================================
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
}

function switchTab(tabName) {
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`.nav-item[data-tab="${tabName}"]`)?.classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(`tab-${tabName}`)?.classList.add('active');
    
    // Special handling for certain tabs
    if (tabName === 'compress' && originalImage) {
        updateCompressPreview();
    }
    if (tabName === 'export' && editedImage) {
        updateExportPreview();
    }
}

// ========================================
// File Handling
// ========================================
function handleFileSelect(e) {
    const files = e.target.files;
    if (files.length > 0) {
        if (document.querySelector('.nav-item[data-tab="batch"]').classList.contains('active')) {
            addBatchFiles(files);
        } else {
            handleFiles(files[0]);
        }
    }
}

function handleFiles(file) {
    if (!file.type.startsWith('image/') && !file.name.match(/\.(heic|heif|tiff|tif)$/i)) {
        showToast(i18n[currentLang].error);
        return;
    }
    
    if (file.size > 50 * 1024 * 1024) {
        showToast('File too large (max 50MB)');
        return;
    }
    
    currentFile = file;
    
    // Handle HEIC files
    if (file.name.match(/\.(heic|heif)$/i)) {
        showToast('HEIC support requires conversion. Using original format.');
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        originalImage = new Image();
        originalImage.onload = () => {
            editedImage = originalImage;
            showEditor();
            updateCanvas();
            updateStats();
            
            // Show edit section in sidebar
            document.getElementById('editSection').style.display = 'block';
            document.getElementById('btnReset').style.display = 'inline-flex';
            document.getElementById('btnDownload').style.display = 'inline-flex';
            
            showToast(i18n[currentLang].success);
        };
        originalImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function showEditor() {
    document.getElementById('canvasArea').style.display = 'flex';
    document.getElementById('editSection').style.display = 'block';
    document.getElementById('imageStats').style.display = 'block';
}

// ========================================
// Canvas and Image Display
// ========================================
function updateCanvas() {
    if (!originalImage) return;
    
    const originalCanvas = document.getElementById('canvasOriginal');
    const editedCanvas = document.getElementById('canvasEdited');
    
    if (originalCanvas) {
        originalCanvas.src = originalImage.src;
    }
    
    if (editedCanvas) {
        const filterString = getFilterString();
        editedCanvas.style.filter = filterString;
        editedCanvas.style.transform = `rotate(${imageState.rotate}deg) scale(${imageState.flipH}, ${imageState.flipV})`;
        editedCanvas.style.opacity = imageState.opacity / 100;
        editedCanvas.src = originalImage.src;
    }
    
    // Update compress preview
    const compressOriginal = document.getElementById('compressOriginalPreview');
    const compressResult = document.getElementById('compressResultPreview');
    
    if (compressOriginal) {
        compressOriginal.src = originalImage.src;
    }
    if (compressResult) {
        compressResult.style.filter = filterString;
        compressResult.src = originalImage.src;
    }
    
    // Update export preview
    const exportPreview = document.getElementById('exportPreview');
    if (exportPreview) {
        exportPreview.style.filter = filterString;
        exportPreview.src = originalImage.src;
    }
}

function getFilterString() {
    let filters = [];
    
    // Apply selected filter preset
    switch (currentFilter) {
        case 'grayscale':
            filters.push('grayscale(100%)');
            break;
        case 'sepia':
            filters.push('sepia(100%)');
            break;
        case 'vintage':
            filters.push('sepia(50%)', 'contrast(120%)', 'saturate(80%)');
            break;
        case 'warm':
            filters.push('sepia(30%)', 'saturate(140%)', 'hue-rotate(-10deg)');
            break;
        case 'cool':
            filters.push('saturate(120%)', 'hue-rotate(10deg)', 'brightness(105%)');
            break;
        case 'dramatic':
            filters.push('contrast(150%)', 'saturate(120%)');
            break;
        case 'vivid':
            filters.push('saturate(180%)', 'contrast(110%)');
            break;
        case 'invert':
            filters.push('invert(100%)');
            break;
        case 'duotone':
            filters.push('grayscale(100%)', 'sepia(100%)', 'hue-rotate(220deg)', 'saturate(300%)');
            break;
        case 'noir':
            filters.push('grayscale(100%)', 'contrast(150%)', 'brightness(90%)');
            break;
        case 'cyber':
            filters.push('hue-rotate(180deg)', 'saturate(200%)', 'contrast(120%)');
            break;
    }
    
    // Apply adjustments
    if (imageState.brightness !== 100) {
        filters.push(`brightness(${imageState.brightness}%)`);
    }
    if (imageState.contrast !== 100) {
        filters.push(`contrast(${imageState.contrast}%)`);
    }
    if (imageState.saturation !== 100) {
        filters.push(`saturate(${imageState.saturation}%)`);
    }
    if (imageState.hue !== 0) {
        filters.push(`hue-rotate(${imageState.hue}deg)`);
    }
    if (imageState.blur > 0) {
        filters.push(`blur(${imageState.blur}px)`);
    }
    
    return filters.join(' ');
}

function updateStats() {
    if (!originalImage || !currentFile) return;
    
    document.getElementById('statDimensions').textContent = `${originalImage.width}×${originalImage.height}`;
    document.getElementById('statFileSize').textContent = formatFileSize(currentFile.size);
    document.getElementById('statFormat').textContent = currentFile.type.split('/')[1]?.toUpperCase() || 'Unknown';
    
    document.getElementById('exportDimensions').textContent = `${originalImage.width}×${originalImage.height}`;
    document.getElementById('exportSize').textContent = formatFileSize(currentFile.size);
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// ========================================
// Zoom Functions
// ========================================
function zoomImage(delta) {
    currentZoom = Math.max(0.1, Math.min(3, currentZoom + delta));
    applyZoom();
}

function resetZoom() {
    currentZoom = 1;
    applyZoom();
}

function applyZoom() {
    const edited = document.getElementById('canvasEdited');
    const original = document.getElementById('canvasOriginal');
    
    if (edited) {
        edited.style.maxHeight = `${400 * currentZoom}px`;
    }
    if (original) {
        original.style.maxHeight = `${400 * currentZoom}px`;
    }
    
    document.getElementById('zoomLevel').textContent = Math.round(currentZoom * 100) + '%';
}

// ========================================
// Compare Function
// ========================================
function toggleCompare() {
    isComparing = !isComparing;
    const container = document.getElementById('compareContainer');
    const btn = document.getElementById('compareBtn');
    
    if (isComparing) {
        container.classList.add('comparing');
        btn.classList.add('active');
    } else {
        container.classList.remove('comparing');
        btn.classList.remove('active');
        const edited = document.querySelector('.edited-wrapper');
        if (edited) {
            edited.style.clipPath = 'none';
        }
    }
}

// ========================================
// Adjustment Functions
// ========================================
function resetAdjustments() {
    imageState = {
        brightness: 100,
        contrast: 100,
        saturation: 100,
        hue: 0,
        blur: 0,
        opacity: 100,
        rotate: 0,
        flipH: 1,
        flipV: 1
    };
    
    // Reset sliders
    document.getElementById('brightness').value = 100;
    document.getElementById('brightnessValue').textContent = '100%';
    document.getElementById('contrast').value = 100;
    document.getElementById('contrastValue').textContent = '100%';
    document.getElementById('saturation').value = 100;
    document.getElementById('saturationValue').textContent = '100%';
    document.getElementById('hue').value = 0;
    document.getElementById('hueValue').textContent = '0°';
    document.getElementById('blur').value = 0;
    document.getElementById('blurValue').textContent = '0px';
    document.getElementById('opacity').value = 100;
    document.getElementById('opacityValue').textContent = '100%';
    
    updateCanvas();
    showToast(i18n[currentLang].success);
}

function applyAdjustments() {
    // Apply adjustments permanently
    showToast(i18n[currentLang].success);
}

// ========================================
// Transform Functions
// ========================================
function rotateImage(degrees) {
    imageState.rotate = (imageState.rotate + degrees) % 360;
    document.getElementById('rotateSlider').value = imageState.rotate;
    document.getElementById('rotateValue').textContent = imageState.rotate + '°';
    updateCanvas();
}

function flipImage(direction) {
    if (direction === 'horizontal') {
        imageState.flipH *= -1;
    } else {
        imageState.flipV *= -1;
    }
    updateCanvas();
}

function updateCropInputs() {
    if (!originalImage) return;
    
    const ratio = cropState.ratio;
    if (ratio === 'free') return;
    
    const [w, h] = ratio.split(':').map(Number);
    const imgRatio = originalImage.width / originalImage.height;
    const targetRatio = w / h;
    
    if (imgRatio > targetRatio) {
        document.getElementById('cropHeight').value = originalImage.height;
        document.getElementById('cropWidth').value = Math.round(originalImage.height * targetRatio);
    } else {
        document.getElementById('cropWidth').value = originalImage.width;
        document.getElementById('cropHeight').value = Math.round(originalImage.width / targetRatio);
    }
}

function updateCropDimensions() {
    // Auto-calculate based on ratio
}

function applyCrop() {
    if (!originalImage) {
        showToast(i18n[currentLang].selectImage);
        return;
    }
    
    const width = parseInt(document.getElementById('cropWidth').value) || originalImage.width;
    const height = parseInt(document.getElementById('cropHeight').value) || originalImage.height;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = width;
    canvas.height = height;
    
    // Center crop
    const sx = (originalImage.width - width) / 2;
    const sy = (originalImage.height - height) / 2;
    
    ctx.drawImage(originalImage, sx, sy, width, height, 0, 0, width, height);
    
    canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const img = new Image();
        img.onload = () => {
            originalImage = img;
            updateCanvas();
            updateStats();
            showToast(i18n[currentLang].success);
        };
        img.src = url;
    }, currentFile?.type || 'image/jpeg', 0.95);
}

function applyResize() {
    if (!originalImage) {
        showToast(i18n[currentLang].selectImage);
        return;
    }
    
    const width = parseInt(document.getElementById('resizeWidth').value);
    const height = parseInt(document.getElementById('resizeHeight').value);
    
    if (!width || !height) {
        showToast('Please enter valid dimensions');
        return;
    }
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = width;
    canvas.height = height;
    
    ctx.drawImage(originalImage, 0, 0, width, height);
    
    canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const img = new Image();
        img.onload = () => {
            originalImage = img;
            updateCanvas();
            updateStats();
            showToast(i18n[currentLang].success);
        };
        img.src = url;
    }, currentFile?.type || 'image/jpeg', 0.95);
}

// ========================================
// Compression Functions
// ========================================
function updateCompressPreview() {
    if (!originalImage) return;
    
    const quality = document.getElementById('qualitySlider').value / 100;
    const format = document.getElementById('compressFormat').value;
    const mimeType = format === 'original' ? (currentFile?.type || 'image/jpeg') : format;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = originalImage.width;
    canvas.height = originalImage.height;
    
    // Apply current filters
    ctx.filter = getFilterString();
    ctx.drawImage(originalImage, 0, 0);
    
    canvas.toBlob((blob) => {
        document.getElementById('compressedSize').textContent = formatFileSize(blob.size);
        
        const savings = ((currentFile.size - blob.size) / currentFile.size * 100).toFixed(1);
        const savingsEl = document.getElementById('compressSavings');
        if (savings > 0) {
            savingsEl.textContent = `(-${savings}%)`;
        } else {
            savingsEl.textContent = '';
        }
    }, mimeType, quality);
    
    document.getElementById('originalSize').textContent = formatFileSize(currentFile?.size || 0);
}

function applyCompression() {
    if (!originalImage) {
        showToast(i18n[currentLang].selectImage);
        return;
    }
    
    const quality = document.getElementById('qualitySlider').value / 100;
    const format = document.getElementById('compressFormat').value;
    const mimeType = format === 'original' ? (currentFile?.type || 'image/jpeg') : format;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = originalImage.width;
    canvas.height = originalImage.height;
    
    ctx.filter = getFilterString();
    ctx.drawImage(originalImage, 0, 0);
    
    const ext = mimeType.split('/')[1];
    const filename = `compressed_${Date.now()}.${ext}`;
    
    canvas.toBlob((blob) => {
        downloadBlob(blob, filename);
        showToast(i18n[currentLang].success);
    }, mimeType, quality);
}

// ========================================
// Export Functions
// ========================================
function updateExportPreview() {
    if (!originalImage) return;
    
    const quality = document.getElementById('exportQuality').value / 100;
    const format = document.getElementById('exportFormat').value;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = originalImage.width;
    canvas.height = originalImage.height;
    
    ctx.filter = getFilterString();
    ctx.drawImage(originalImage, 0, 0);
    
    canvas.toBlob((blob) => {
        document.getElementById('exportSize').textContent = formatFileSize(blob.size);
    }, format, quality);
}

function downloadImage() {
    switchTab('export');
}

function downloadFinal() {
    if (!originalImage) {
        showToast(i18n[currentLang].selectImage);
        return;
    }
    
    const quality = document.getElementById('exportQuality').value / 100;
    const format = document.getElementById('exportFormat').value;
    let filename = document.getElementById('exportFilename').value || 'imagepro-export';
    
    const ext = format.split('/')[1];
    if (!filename.endsWith('.' + ext)) {
        filename += '.' + ext;
    }
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Handle rotation
    if (Math.abs(imageState.rotate) === 90 || Math.abs(imageState.rotate) === 270) {
        canvas.width = originalImage.height;
        canvas.height = originalImage.width;
    } else {
        canvas.width = originalImage.width;
        canvas.height = originalImage.height;
    }
    
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(imageState.rotate * Math.PI / 180);
    ctx.scale(imageState.flipH, imageState.flipV);
    ctx.filter = getFilterString();
    ctx.globalAlpha = imageState.opacity / 100;
    ctx.drawImage(originalImage, -originalImage.width / 2, -originalImage.height / 2);
    ctx.restore();
    
    canvas.toBlob((blob) => {
        downloadBlob(blob, filename);
        showToast(i18n[currentLang].success);
    }, format, quality);
}

function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function resetAll() {
    currentFile = null;
    originalImage = null;
    editedImage = null;
    currentFilter = 'none';
    
    resetAdjustments();
    
    document.getElementById('fileInput').value = '';
    document.getElementById('canvasArea').style.display = 'none';
    document.getElementById('editSection').style.display = 'none';
    document.getElementById('imageStats').style.display = 'none';
    document.getElementById('btnReset').style.display = 'none';
    document.getElementById('btnDownload').style.display = 'none';
    
    // Reset filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.filter-btn[data-filter="none"]')?.classList.add('active');
    
    switchTab('upload');
    showToast(i18n[currentLang].success);
}

// ========================================
// Batch Processing
// ========================================
function addMoreFiles() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,.heic,.heif,.tiff,.tif';
    input.multiple = true;
    input.onchange = (e) => addBatchFiles(e.target.files);
    input.click();
}

function addBatchFiles(files) {
    Array.from(files).forEach(file => {
        if (file.size > 50 * 1024 * 1024) return;
        
        batchFiles.push({
            file: file,
            id: Date.now() + Math.random()
        });
    });
    
    renderBatchFiles();
}

function renderBatchFiles() {
    const container = document.getElementById('batchFilesList');
    
    if (batchFiles.length === 0) {
        container.innerHTML = `<p class="empty-state">${i18n[currentLang].noBatchFiles}</p>`;
        return;
    }
    
    container.innerHTML = batchFiles.map(item => `
        <div class="batch-file-item" data-id="${item.id}">
            <img class="batch-file-thumb" src="${URL.createObjectURL(item.file)}" alt="">
            <div class="batch-file-info">
                <div class="batch-file-name">${item.file.name}</div>
                <div class="batch-file-meta">${formatFileSize(item.file.size)} • ${item.file.type.split('/')[1]?.toUpperCase()}</div>
            </div>
            <button class="batch-file-remove" onclick="removeBatchFile(${item.id})">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
}

function removeBatchFile(id) {
    batchFiles = batchFiles.filter(f => f.id !== id);
    renderBatchFiles();
}

function clearBatch() {
    batchFiles = [];
    renderBatchFiles();
}

async function processBatch() {
    if (batchFiles.length === 0) {
        showToast(i18n[currentLang].noBatchFiles);
        return;
    }
    
    const format = document.getElementById('batchFormat').value;
    const quality = document.getElementById('batchQuality').value / 100;
    const width = parseInt(document.getElementById('batchWidth').value) || null;
    const height = parseInt(document.getElementById('batchHeight').value) || null;
    
    const modal = document.getElementById('progressModal');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    modal.style.display = 'flex';
    
    for (let i = 0; i < batchFiles.length; i++) {
        const item = batchFiles[i];
        const percent = ((i + 1) / batchFiles.length) * 100;
        
        progressFill.style.width = percent + '%';
        progressText.textContent = `${i + 1} / ${batchFiles.length} files`;
        
        await processBatchItem(item, format, quality, width, height);
        
        // Small delay to allow UI update
        await new Promise(r => setTimeout(r, 100));
    }
    
    modal.style.display = 'none';
    showToast(i18n[currentLang].batchComplete);
}

function processBatchItem(item, format, quality, targetWidth, targetHeight) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                
                let width = targetWidth || img.width;
                let height = targetHeight || img.height;
                
                if (document.getElementById('batchMaintainRatio').checked && (targetWidth || targetHeight)) {
                    const ratio = img.width / img.height;
                    if (targetWidth && !targetHeight) {
                        height = width / ratio;
                    } else if (targetHeight && !targetWidth) {
                        width = height * ratio;
                    }
                }
                
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
                
                const mimeType = format === 'original' ? item.file.type : format;
                const ext = mimeType.split('/')[1];
                const filename = `batch_${Date.now()}_${Math.random().toString(36).substr(2, 6)}.${ext}`;
                
                canvas.toBlob((blob) => {
                    downloadBlob(blob, filename);
                    resolve();
                }, mimeType, quality);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(item.file);
    });
}

// ========================================
// Toast Notification
// ========================================
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
