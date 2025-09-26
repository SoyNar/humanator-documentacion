import React, { useState } from "react";
import ReactFlow, { Background, Controls, MiniMap, Node, Edge } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  // Actores
  { 
    id: "funcionario", 
    position: { x: -200, y: 0 }, 
    data: { label: "👤 Funcionario" }, 
    type: "default",
    style: { backgroundColor: '#e3f2fd', border: '2px solid #1976d2' }
  },
  { 
    id: "admin", 
    position: { x: -200, y: -150 }, 
    data: { label: "🛠️ Administrador" }, 
    type: "default",
    style: { backgroundColor: '#f3e5f5', border: '2px solid #7b1fa2' }
  },
  { 
    id: "jefe", 
    position: { x: -200, y: 150 }, 
    data: { label: "👔 Jefe Inmediato" }, 
    type: "default",
    style: { backgroundColor: '#e8f5e8', border: '2px solid #388e3c' }
  },
  { 
    id: "comunicador", 
    position: { x: -200, y: -300 }, 
    data: { label: "📢 Comunicador" }, 
    type: "default",
    style: { backgroundColor: '#fff3e0', border: '2px solid #f57c00' }
  },

  // Casos de uso - Funcionario
  { 
    id: "consultar-perfil", 
    position: { x: 100, y: -50 }, 
    data: { label: "Consultar Perfil" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '20px' }
  },
  { 
    id: "solicitar-permisos", 
    position: { x: 100, y: 50 }, 
    data: { label: "Solicitar Permisos" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '20px' }
  },
  { 
    id: "canjear-bonos", 
    position: { x: 300, y: 0 }, 
    data: { label: "Canjear Bonos" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '20px' }
  },

  // Casos de uso - Administrador
  { 
    id: "configurar-indicadores", 
    position: { x: 100, y: -200 }, 
    data: { label: "Configurar Indicadores" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '20px' }
  },
  { 
    id: "asignar-puntos", 
    position: { x: 300, y: -150 }, 
    data: { label: "Asignar Puntos" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '20px' }
  },
  { 
    id: "gestionar-estrategias", 
    position: { x: 100, y: -100 }, 
    data: { label: "Gestionar Estrategias" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '20px' }
  },

  // Casos de uso - Jefe
  { 
    id: "validar-permisos", 
    position: { x: 100, y: 150 }, 
    data: { label: "Validar Permisos" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '20px' }
  },

  // Casos de uso - Comunicador
  { 
    id: "publicar-noticias", 
    position: { x: 100, y: -300 }, 
    data: { label: "Publicar Noticias" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '20px' }
  },

  // Casos de uso adicionales - Funcionario
  { 
    id: "ver-extracto", 
    position: { x: 300, y: 50 }, 
    data: { label: "Ver Extracto Puntos" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '20px' }
  },
  { 
    id: "consultar-cv", 
    position: { x: 300, y: 100 }, 
    data: { label: "Consultar CV Personal" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '20px' }
  },
  { 
    id: "ver-comunicados", 
    position: { x: 300, y: 150 }, 
    data: { label: "Ver Comunicados" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '20px' }
  },

  // Casos de uso adicionales - Administrador
  { 
    id: "gestionar-bonos", 
    position: { x: 100, y: -250 }, 
    data: { label: "Gestionar Bonos" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '20px' }
  },
  { 
    id: "consultar-cv-empleados", 
    position: { x: 300, y: -200 }, 
    data: { label: "Consultar CV Empleados" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '20px' }
  },
  { 
    id: "generar-reportes", 
    position: { x: 300, y: -250 }, 
    data: { label: "Generar Reportes" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '20px' }
  },
  { 
    id: "configurar-restricciones", 
    position: { x: 500, y: -200 }, 
    data: { label: "Configurar Restricciones" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '20px' }
  },

  // Casos de uso adicionales - Comunicador
  { 
    id: "programar-publicaciones", 
    position: { x: 300, y: -300 }, 
    data: { label: "Programar Publicaciones" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '20px' }
  },
  { 
    id: "gestionar-logros", 
    position: { x: 100, y: -350 }, 
    data: { label: "Gestionar Logros" }, 
    type: "default",
    style: { backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '20px' }
  },

  // Casos de uso comunes (todos los actores)
  { 
    id: "iniciar-sesion", 
    position: { x: 600, y: -100 }, 
    data: { label: "Iniciar Sesión" }, 
    type: "default",
    style: { backgroundColor: '#fff9c4', border: '2px solid #f57f17', borderRadius: '20px' }
  },
  { 
    id: "ver-dashboard", 
    position: { x: 600, y: 0 }, 
    data: { label: "Ver Dashboard" }, 
    type: "default",
    style: { backgroundColor: '#fff9c4', border: '2px solid #f57f17', borderRadius: '20px' }
  },
  { 
    id: "actualizar-perfil", 
    position: { x: 600, y: 100 }, 
    data: { label: "Actualizar Perfil" }, 
    type: "default",
    style: { backgroundColor: '#fff9c4', border: '2px solid #f57f17', borderRadius: '20px' }
  },
];

const initialEdges: Edge[] = [
  // Funcionario
  { id: "e1", source: "funcionario", target: "consultar-perfil", type: "straight" },
  { id: "e2", source: "funcionario", target: "solicitar-permisos", type: "straight" },
  { id: "e3", source: "funcionario", target: "canjear-bonos", type: "straight" },
  { id: "e21", source: "funcionario", target: "ver-extracto", type: "straight" },
  { id: "e22", source: "funcionario", target: "consultar-cv", type: "straight" },
  { id: "e23", source: "funcionario", target: "ver-comunicados", type: "straight" },
  
  // Administrador
  { id: "e4", source: "admin", target: "configurar-indicadores", type: "straight" },
  { id: "e5", source: "admin", target: "asignar-puntos", type: "straight" },
  { id: "e6", source: "admin", target: "gestionar-estrategias", type: "straight" },
  { id: "e24", source: "admin", target: "gestionar-bonos", type: "straight" },
  { id: "e25", source: "admin", target: "consultar-cv-empleados", type: "straight" },
  { id: "e26", source: "admin", target: "generar-reportes", type: "straight" },
  { id: "e27", source: "admin", target: "configurar-restricciones", type: "straight" },
  
  // Jefe
  { id: "e7", source: "jefe", target: "validar-permisos", type: "straight" },
  
  // Comunicador
  { id: "e8", source: "comunicador", target: "publicar-noticias", type: "straight" },
  { id: "e28", source: "comunicador", target: "programar-publicaciones", type: "straight" },
  { id: "e29", source: "comunicador", target: "gestionar-logros", type: "straight" },
  
  // Casos de uso comunes - todos los actores
  { id: "e9", source: "funcionario", target: "iniciar-sesion", type: "straight" },
  { id: "e10", source: "admin", target: "iniciar-sesion", type: "straight" },
  { id: "e11", source: "jefe", target: "iniciar-sesion", type: "straight" },
  { id: "e12", source: "comunicador", target: "iniciar-sesion", type: "straight" },
  
  { id: "e13", source: "funcionario", target: "ver-dashboard", type: "straight" },
  { id: "e14", source: "admin", target: "ver-dashboard", type: "straight" },
  { id: "e15", source: "jefe", target: "ver-dashboard", type: "straight" },
  { id: "e16", source: "comunicador", target: "ver-dashboard", type: "straight" },
  
  { id: "e17", source: "funcionario", target: "actualizar-perfil", type: "straight" },
  { id: "e18", source: "admin", target: "actualizar-perfil", type: "straight" },
  { id: "e19", source: "jefe", target: "actualizar-perfil", type: "straight" },
  { id: "e20", source: "comunicador", target: "actualizar-perfil", type: "straight" },
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
          Haz clic en cualquier elemento para ver su descripción. Los actores están a la izquierda, los casos de uso a la derecha.
        </p>
      </div>

      <div style={{ width: "100%", height: "600px", border: "1px solid #ddd", borderRadius: "10px" }}>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          fitView
          onNodeClick={handleNodeClick}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={true}
        >
          <MiniMap 
            nodeColor={(node) => {
              if (node.style?.backgroundColor) return node.style.backgroundColor;
              return '#ffffff';
            }}
          />
          <Controls />
          <Background color="#f8f9fa" gap={16} />
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
          <div className="space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-100 border-2 border-blue-500 rounded"></div>
              <span>Actores del sistema</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white border border-gray-400 rounded-full"></div>
              <span>Casos de uso</span>
            </div>
          </div>
        </div>
        
        <div className="p-3 bg-green-50 rounded-lg">
          <h4 className="font-medium text-green-800 mb-2">✨ Mejoras aplicadas</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Mejor organización visual</li>
            <li>• Colores diferenciados por actor</li>
            <li>• Descripciones detalladas</li>
            <li>• Layout más limpio y profesional</li>
          </ul>
        </div>
      </div>
    </div>
  );
}