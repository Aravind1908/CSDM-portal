import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Label,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "High Package", students: 10 },
  { name: "Excellent", students: 15 },
  { name: "Proficient", students: 20 },
  { name: "Ideal", students: 12 },
  { name: "Capable", students: 18 },
];

const COLORS = ["#6366f1", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b"];

const statVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 80 },
  }),
};

const totalStudents = data.reduce((sum, curr) => sum + curr.students, 0);

function Home() {
  return (
    <div className="space-y-10">
      {/* Charts Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Student Category Distribution
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Donut Chart */}
          <div className="flex-1 min-w-[300px]">
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <defs>
                  {COLORS.map((color, index) => (
                    <linearGradient
                      id={`grad-${index}`}
                      key={index}
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor={color} stopOpacity={0.6} />
                      <stop offset="100%" stopColor={color} stopOpacity={1} />
                    </linearGradient>
                  ))}
                </defs>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={4}
                  dataKey="students"
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={`url(#grad-${index})`} />
                  ))}
                  <Label
                    value={`Total: ${totalStudents}`}
                    position="center"
                    style={{
                      fill: "#4B5563",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  />
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="flex-1 min-w-[300px]">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" radius={[8, 8, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Animated Stat Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {data.map((item, i) => (
          <motion.div
            key={item.name}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={statVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded-xl shadow-lg cursor-pointer hover:shadow-xl flex flex-col justify-center items-center text-center transition-all"
          >
            <h3 className="text-md font-bold text-indigo-600">Category</h3>
            <p className="text-gray-800 font-semibold">{item.name}</p>
            <p className="text-sm text-gray-500 mt-2">
              No. of Students:{" "}
              <span className="font-bold text-indigo-700">{item.students}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Home;
