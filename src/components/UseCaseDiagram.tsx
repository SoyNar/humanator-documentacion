import React, { useState } from "react";
import ReactFlow, { Background, Controls, MiniMap, Node, Edge } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  // Actores - Columna izquierda
  { 
    id: "comunicador", 
    position: { x: -300, y: -200 }, 
    data: { label: "📢 Comunicador" }, 
    type: "default",
    style: { backgroundColor: '#fff3e0', border: '2px solid #f57c00', padding: '10px' }
  },
  { 
    id: "admin", 
    position: { x: -300, y: -50 }, 
    data: { label: "🛠️ Administrador" }, 
    type: "default",
    style: { backgroundColor: '#f3e5f5', border: '2px solid #7b1fa2', padding: '10px' }
  },
  { 
    id: "funcionario", 
    position: { x: -300, y: 100 }, 
    data: { label: "👤 Funcionario" }, 
    type: "default",
    style: { backgroundColor: '#e3f2fd', border: '2px solid #1976d2', padding: '10px' }
  },
  { 
    id: "jefe", 
    position: { x: -300, y: 250 }, 
    data: { label: "👔 Jefe Inmediato" }, 
    type: "default",
    style: { backgroundColor: '#e8f5e8', border: '2px solid #388e3c', padding: '10px' }
  },

  // Casos de uso - Comunicador (fila superior)
  { 
    id: "publicar-noticias", 
    position: { x: 50, y: -250 }, 
    data: { label: "Publicar Noticias" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '25px', padding: '8px' }
  },
  { 
    id: "programar-publicaciones", 
    position: { x: 250, y: -250 }, 
    data: { label: "Programar Publicaciones" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '25px', padding: '8px' }
  },
  { 
    id: "gestionar-logros", 
    position: { x: 450, y: -250 }, 
    data: { label: "Gestionar Logros" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '25px', padding: '8px' }
  },

  // Casos de uso - Administrador (segunda fila)
  { 
    id: "configurar-indicadores", 
    position: { x: 50, y: -120 }, 
    data: { label: "Configurar Indicadores" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '25px', padding: '8px' }
  },
  { 
    id: "gestionar-estrategias", 
    position: { x: 250, y: -120 }, 
    data: { label: "Gestionar Estrategias" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '25px', padding: '8px' }
  },
  { 
    id: "gestionar-bonos", 
    position: { x: 450, y: -120 }, 
    data: { label: "Gestionar Bonos" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '25px', padding: '8px' }
  },
  { 
    id: "asignar-puntos", 
    position: { x: 50, y: -60 }, 
    data: { label: "Asignar Puntos" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '25px', padding: '8px' }
  },
  { 
    id: "consultar-cv-empleados", 
    position: { x: 250, y: -60 }, 
    data: { label: "Consultar CV Empleados" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '25px', padding: '8px' }
  },
  { 
    id: "generar-reportes", 
    position: { x: 450, y: -60 }, 
    data: { label: "Generar Reportes" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '25px', padding: '8px' }
  },
  { 
    id: "configurar-restricciones", 
    position: { x: 650, y: -90 }, 
    data: { label: "Configurar Restricciones" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '25px', padding: '8px' }
  },

  // Casos de uso - Funcionario (fila central)
  { 
    id: "consultar-perfil", 
    position: { x: 50, y: 70 }, 
    data: { label: "Consultar Perfil" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '25px', padding: '8px' }
  },
  { 
    id: "solicitar-permisos", 
    position: { x: 250, y: 70 }, 
    data: { label: "Solicitar Permisos" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '25px', padding: '8px' }
  },
  { 
    id: "canjear-bonos", 
    position: { x: 450, y: 70 }, 
    data: { label: "Canjear Bonos" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '25px', padding: '8px' }
  },
  { 
    id: "ver-extracto", 
    position: { x: 50, y: 130 }, 
    data: { label: "Ver Extracto Puntos" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '25px', padding: '8px' }
  },
  { 
    id: "consultar-cv", 
    position: { x: 250, y: 130 }, 
    data: { label: "Consultar CV Personal" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '25px', padding: '8px' }
  },
  { 
    id: "ver-comunicados", 
    position: { x: 450, y: 130 }, 
    data: { label: "Ver Comunicados" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '25px', padding: '8px' }
  },

  // Caso de uso - Jefe
  { 
    id: "validar-permisos", 
    position: { x: 50, y: 220 }, 
    data: { label: "Validar Permisos" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '25px', padding: '8px' }
  },

  // Casos de uso comunes (columna derecha)
  { 
    id: "iniciar-sesion", 
    position: { x: 750, y: 20 }, 
    data: { label: "Iniciar Sesión" }, 
    type: "default",
    style: { backgroundColor: '#fff9c4', border: '2px solid #f57f17', borderRadius: '25px', padding: '8px' }
  },
  { 
    id: "ver-dashboard", 
    position: { x: 750, y: 80 }, 
    data: { label: "Ver Dashboard" }, 
    type: "default",
    style: { backgroundColor: '#fff9c4', border: '2px solid #f57f17', borderRadius: '25px', padding: '8px' }
  },
  { 
    id: "actualizar-perfil", 
    position: { x: 750, y: 140 }, 
    data: { label: "Actualizar Perfil" }, 
    type: "default",
    style: { backgroundColor: '#fff9c4', border: '2px solid #f57f17', borderRadius: '25px', padding: '8px' }
  },
];

const initialEdges: Edge[] = [
  // Comunicador
  { id: "e1", source: "comunicador", target: "publicar-noticias", type: "smoothstep" },
  { id: "e2", source: "comunicador", target: "programar-publicaciones", type: "smoothstep" },
  { id: "e3", source: "comunicador", target: "gestionar-logros", type: "smoothstep" },
  
  // Administrador
  { id: "e4", source: "admin", target: "configurar-indicadores", type: "smoothstep" },
  { id: "e5", source: "admin", target: "gestionar-estrategias", type: "smoothstep" },
  { id: "e6", source: "admin", target: "gestionar-bonos", type: "smoothstep" },
  { id: "e7", source: "admin", target: "asignar-puntos", type: "smoothstep" },
  { id: "e8", source: "admin", target: "consultar-cv-empleados", type: "smoothstep" },
  { id: "e9", source: "admin", target: "generar-reportes", type: "smoothstep" },
  { id: "e10", source: "admin", target: "configurar-restricciones", type: "smoothstep" },
  
  // Funcionario
  { id: "e11", source: "funcionario", target: "consultar-perfil", type: "smoothstep" },
  { id: "e12", source: "funcionario", target: "solicitar-permisos", type: "smoothstep" },
  { id: "e13", source: "funcionario", target: "canjear-bonos", type: "smoothstep" },
  { id: "e14", source: "funcionario", target: "ver-extracto", type: "smoothstep" },
  { id: "e15", source: "funcionario", target: "consultar-cv", type: "smoothstep" },
  { id: "e16", source: "funcionario", target: "ver-comunicados", type: "smoothstep" },
  
  // Jefe
  { id: "e17", source: "jefe", target: "validar-permisos", type: "smoothstep" },
  
  // Casos de uso comunes - todos los actores
  { id: "e18", source: "comunicador", target: "iniciar-sesion", type: "smoothstep", style: { stroke: '#9e9e9e', strokeDasharray: '5,5' } },
  { id: "e19", source: "admin", target: "iniciar-sesion", type: "smoothstep", style: { stroke: '#9e9e9e', strokeDasharray: '5,5' } },
  { id: "e20", source: "funcionario", target: "iniciar-sesion", type: "smoothstep", style: { stroke: '#9e9e9e', strokeDasharray: '5,5' } },
  { id: "e21", source: "jefe", target: "iniciar-sesion", type: "smoothstep", style: { stroke: '#9e9e9e', strokeDasharray: '5,5' } },
  
  { id: "e22", source: "comunicador", target: "ver-dashboard", type: "smoothstep", style: { stroke: '#9e9e9e', strokeDasharray: '5,5' } },
  { id: "e23", source: "admin", target: "ver-dashboard", type: "smoothstep", style: { stroke: '#9e9e9e', strokeDasharray: '5,5' } },
  { id: "e24", source: "funcionario", target: "ver-dashboard", type: "smoothstep", style: { stroke: '#9e9e9e', strokeDasharray: '5,5' } },
  { id: "e25", source: "jefe", target: "ver-dashboard", type: "smoothstep", style: { stroke: '#9e9e9e', strokeDasharray: '5,5' } },
  
  { id: "e26", source: "comunicador", target: "actualizar-perfil", type: "smoothstep", style: { stroke: '#9e9e9e', strokeDasharray: '5,5' } },
  { id: "e27", source: "admin", target: "actualizar-perfil", type: "smoothstep", style: { stroke: '#9e9e9e', strokeDasharray: '5,5' } },
  { id: "e28", source: "funcionario", target: "actualizar-perfil", type: "smoothstep", style: { stroke: '#9e9e9e', strokeDasharray: '5,5' } },
  { id: "e29", source: "jefe", target: "actualizar-perfil", type: "smoothstep", style: { stroke: '#9e9e9e', strokeDasharray: '5,5' } },
];

const actorDescriptions = {
  "👤 Funcionario": "Usuario estándar del sistema que puede consultar información personal y realizar solicitudes",
  "🛠️ Administrador": "Usuario con permisos administrativos para configurar el sistema y gestionar puntos",
  "👔 Jefe Inmediato": "Supervisor que valida y aprueba las solicitudes de los funcionarios",
  "📢 Comunicador": "Responsable de gestionar las comunicaciones internas y noticias"
};

const useCaseDescriptions = {
  "Consultar Perfil": "Permite al funcionario ver su información personal y puntos acumulados",
  "Solicitar Permisos": "Funcionario puede crear solicitudes de permisos que requieren aprobación",
  "Canjear Bonos": "Intercambiar puntos acumulados por beneficios disponibles",
  "Ver Extracto Puntos": "Historial detallado de asignación y gasto de puntos tipo extracto bancario",
  "Consultar CV Personal": "Ver y actualizar curriculum vitae estandarizado personal",
  "Ver Comunicados": "Acceder a noticias internas, programas laborales y comunicaciones",
  "Configurar Indicadores": "Definir métricas y parámetros del sistema de puntos",
  "Asignar Puntos": "Otorgar puntos a funcionarios basado en logros o actividades",
  "Gestionar Estrategias": "Crear y administrar estrategias de gamificación y redención",
  "Gestionar Bonos": "Crear, configurar y administrar estrategias de canje de recompensas",
  "Consultar CV Empleados": "Acceder a hojas de vida de todos los empleados para consulta administrativa",
  "Generar Reportes": "Crear reportes de desempeño, logros y canjes del sistema",
  "Configurar Restricciones": "Establecer horarios, reglas y limitaciones del sistema",
  "Validar Permisos": "Revisar y aprobar/rechazar solicitudes de permisos justificados",
  "Publicar Noticias": "Crear y publicar comunicaciones internas para los funcionarios",
  "Programar Publicaciones": "Programar contenido con fechas, horarios y estados activo/inactivo",
  "Gestionar Logros": "Administrar histórico de logros, premios y reconocimientos con fotos",
  "Iniciar Sesión": "Autenticación en el sistema - disponible para todos los usuarios",
  "Ver Dashboard": "Acceder al panel principal con información personalizada por rol",
  "Actualizar Perfil": "Modificar datos personales y preferencias - común a todos los roles"
};

export default function ImprovedUseCaseDiagram() {
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<'actor' | 'usecase' | null>(null);

  const handleNodeClick = (_, node) => {
    const label = node.data.label;
    setSelected(label);
    
    // Determinar si es actor o caso de uso
    if (actorDescriptions[label]) {
      setSelectedType('actor');
    } else {
      setSelectedType('usecase');
    }
  };

  const getDescription = () => {
    if (!selected) return null;
    
    if (selectedType === 'actor') {
      return actorDescriptions[selected];
    } else {
      return useCaseDescriptions[selected];
    }
  };

  return (
    <div className="w-full">
      <div className="mb-4 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Sistema de Gamificación - Casos de Uso</h3>
        <p className="text-blue-600 text-sm">
          Haz clic en cualquier elemento para ver su descripción. Layout organizado para mejor legibilidad.
        </p>
      </div>

      <div style={{ width: "100%", height: "700px", border: "1px solid #ddd", borderRadius: "10px" }}>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          fitView
          onNodeClick={handleNodeClick}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={true}
          fitViewOptions={{ padding: 0.1 }}
        >
          <MiniMap 
            nodeColor={(node) => {
              if (node.style?.backgroundColor) return node.style.backgroundColor;
              return '#ffffff';
            }}
          />
          <Controls />
          <Background color="#f8f9fa" gap={20} />
        </ReactFlow>
      </div>

      {selected && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-gray-700">
              {selectedType === 'actor' ? '👤 Actor:' : '⚙️ Caso de Uso:'}
            </span>
            <span className="text-lg font-medium text-gray-900">{selected}</span>
          </div>
          <p className="text-gray-600">{getDescription()}</p>
        </div>
      )}

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-3 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-800 mb-2">📋 Leyenda</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-100 border-2 border-blue-500 rounded"></div>
              <span>Actores del sistema</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white border border-gray-400 rounded-full"></div>
              <span>Casos de uso específicos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-100 border-2 border-yellow-600 rounded-full"></div>
              <span>Casos de uso comunes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0 border-t-2 border-dashed border-gray-500"></div>
              <span>Funcionalidades compartidas</span>
            </div>
          </div>
        </div>
        
        <div className="p-3 bg-green-50 rounded-lg">
          <h4 className="font-medium text-green-800 mb-2">✨ Mejoras aplicadas</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Layout organizado en filas por actor</li>
            <li>• Sin superposiciones de elementos</li>
            <li>• Conexiones suaves y limpias</li>
            <li>• Casos comunes claramente separados</li>
            <li>• Mayor espacio entre elementos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}