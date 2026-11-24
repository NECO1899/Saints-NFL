"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const temporada_routes_1 = __importDefault(require("./routes/temporada.routes"));
const detalle_temporada_routes_1 = __importDefault(require("./routes/detalle-temporada.routes"));
const temporada_plantilla_routes_1 = __importDefault(require("./routes/temporada-plantilla.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/api/v1/health', (req, res) => {
    res.json({
        status: 'OK'
    });
});
app.use('/api/auth', auth_routes_1.default);
app.use('/api/temporada', temporada_routes_1.default);
app.use('/api/detalle-temporada', detalle_temporada_routes_1.default);
app.use('/api/temporada-plantilla', temporada_plantilla_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map