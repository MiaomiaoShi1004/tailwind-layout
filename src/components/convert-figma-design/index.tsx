import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Download,
  Edit,
  ExternalLink,
  FilePlus,
  Plus,
  Search,
  Settings2,
} from "lucide-react";
import React from "react";

// Mock data for templates
const templates = [
  {
    id: 1,
    name: "{template_name}",
    image: "rectangle-3.svg",
    files: [
      { name: "Eilklage-01-25-Rieke_Mueller", date: "08.01.2025" },
      { name: "Eilklage-01-25-Rieke_Mueller", date: "08.01.2025" },
      { name: "Eilklage-01-25-Rieke_Mueller", date: "08.01.2025" },
    ],
  },
  // Repeat 5 more times for all 6 templates
];

export default function DashboardNonEmpty() {
  return (
    <div className="min-h-screen bg-collection-1-gray-50">
      {/* Top Navigation */}
      <header className="flex items-center justify-between px-8 py-3 bg-collection-1-gray-00 shadow-gray">
        <div className="w-32">{/* Logo component would go here */}</div>

        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Input
              placeholder="Search"
              className="w-full pl-4 pr-10 py-2 border-collection-1-gray-300"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-collection-1-gray-500 w-4 h-4" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-collection-1-gray-900 font-subtle-medium">
            Username
          </span>
          <Avatar>
            <AvatarImage src="/ellipse-1.png" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="mb-6">
          <h1 className="text-3xl font-h-2 text-collection-1-gray-900 mb-6">
            Hello, {"{username}"}
          </h1>

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-h-4 text-collection-1-gray-900">
              My documents
            </h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="border-collection-1-green-300 text-collection-1-green-600"
              >
                <Settings2 className="w-4 h-4 mr-1.5" />
                (Filter)
              </Button>
              <Button className="bg-collection-1-green-500 text-white">
                <FilePlus className="w-4 h-4 mr-1.5" />
                New document
              </Button>
            </div>
          </div>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-2 gap-6">
          {templates.map((template) => (
            <Card
              key={template.id}
              className="flex overflow-hidden bg-collection-1-gray-100 border-collection-1-gray-200"
            >
              {/* Template Preview */}
              <div className="w-[220px] p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm text-collection-1-gray-900">
                    {template.name}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-collection-1-gray-200"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
                <img
                  src={template.image}
                  alt="Template preview"
                  className="flex-1 object-cover -mx-5"
                />
                <Button className="absolute bottom-4 left-[50px] bg-collection-1-green-500 text-white">
                  <Edit className="w-4 h-4 mr-1.5" />
                  Anpassen
                </Button>
              </div>

              {/* Files List */}
              <CardContent className="flex-1 p-6 bg-collection-1-gray-00">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-collection-1-gray-900 font-suble-semibold mb-1">
                      Latest files
                    </CardTitle>
                    <div className="flex items-center gap-1 text-collection-1-green-600 font-detail">
                      102 files in total
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <Button size="icon" className="bg-collection-1-green-500">
                    <Plus className="w-4 h-4 text-white" />
                  </Button>
                </div>

                <div className="space-y-4">
                  {template.files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between pb-1 border-b border-collection-1-gray-100"
                    >
                      <div>
                        <p className="text-collection-1-gray-900 font-table-item truncate">
                          {file.name}
                        </p>
                        <span className="text-collection-1-gray-400 font-detail">
                          {file.date}
                        </span>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Download className="w-6 h-6" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
