import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.routes';
import temporadaRoutes from './routes/temporada.routes';
import detalleTemporadaRoutes from './routes/detalle-temporada.routes';
import temporadaPlantillaRoutes from './routes/temporada-plantilla.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/v1/health', (req, res) => {
  res.json({
    status: 'OK'
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/temporada', temporadaRoutes);
app.use('/api/detalle-temporada', detalleTemporadaRoutes);
app.use('/api/temporada-plantilla', temporadaPlantillaRoutes);

export default app;
