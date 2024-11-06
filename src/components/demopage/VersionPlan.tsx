"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ClipboardList, FileText, PenLine, CreditCard, Package } from "lucide-react";
import { Dictionary } from "@/dictionaries/en";

export default function VersionPlan({ dictionary }: { dictionary: Dictionary }) {
  return (
    <div className="mx-auto max-w-3xl space-y-6 p-4">
      <h1 className="mb-6 text-center text-3xl font-bold">
        {dictionary.commercial.part4.title}
      </h1>

      <Card>
        <CardHeader>
          <CardTitle>{dictionary.commercial.part4.version_compare}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{dictionary.commercial.part4.version_title}</TableHead>
                <TableHead>{dictionary.commercial.part4.desc_title}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{dictionary.commercial.part4.opensource_version}</TableCell>
                <TableCell>
                  {dictionary.commercial.part4.opensource_version_desc}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{dictionary.commercial.part4.commercial_version}</TableCell>
                <TableCell>
                  {dictionary.commercial.part4.commercial_version_desc}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{dictionary.commercial.part4.purchase_title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            {[
              { icon: ClipboardList, text: dictionary.commercial.part4.purchase_1 },
              { icon: FileText, text: dictionary.commercial.part4.purchase_2 },
              { icon: PenLine, text: dictionary.commercial.part4.purchase_3 },
              { icon: CreditCard, text: dictionary.commercial.part4.purchase_4 },
              { icon: Package, text: dictionary.commercial.part4.purchase_5 },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <step.icon className="mb-2 h-12 w-12 text-primary" />
                <span className="text-center text-sm">{step.text}</span>
                {index < 4 && (
                  <div className="mt-2 hidden text-2xl text-primary md:block">→</div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{dictionary.commercial.part4.contact_title}</CardTitle>
          <CardDescription>{dictionary.commercial.part4.contact_desc}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            className="w-full"
            onClick={() => (window.location.href = "mailto:contact@openim.io")}
          >
            {dictionary.commercial.part4.contact_with}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
